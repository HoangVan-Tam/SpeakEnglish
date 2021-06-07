
import { Route, Switch,Redirect} from "react-router-dom";

import Home from "./component/home/home"
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Footer from "./component/footer/footer";
import { lazy,Suspense, useEffect, useState } from "react";

import Loading from "./component/loading"
import { setLogin } from "./redux/actions/account";
import { useDispatch, useSelector } from "react-redux";
import webApi from "./api/webAPI";
import { set } from "date-fns";

const Header = lazy(() => import("./component/header/header"));
const ChangePass = lazy(() => import("./component/ChangePass/ChangePass"));
const Login = lazy(() => import("./component/login/login"));
const Register = lazy(() => import('./component/register/register'));
const InfoAccount = lazy(() => import('./component/account/account'));
const FormTest = lazy(() => import("./component/dialog-test/dialog-test"));
const ContactAccount = lazy(() => import('./component/contact/contact'));
const TestWeek = lazy(() => import("./component/dialog-test/testWeek/testWeek"));
const RollCall = lazy(() => import("./component/roll-call/rollCall"));
const NewsDetail = lazy(() => import("./component/newsDetail/newDetail"));

function App() {
  const [openLogin,setOpenLogin] = useState(false);
  const [openChangePass,setOpenChangePass] = useState(false);
  const [roleLogin,setRoleLogin] = useState(true);// true: student --- false: giang vien
  const [openFormRegister,setOpenFormRegister] =useState(false);
  const dispatch = useDispatch();
  //---------- open login ---------------//
  const handleLogin = (e,e1) => {
    setOpenLogin(e);
    setRoleLogin(e1);
  }
  const takedatalogin = async() => {
    try{
      const response = await webApi.getInfoUser(localStorage.getItem('id'));
      console.log(response);
      const action = setLogin(response);
      dispatch(action);
    }catch(error) {
        console.log("Failed to call API Login remember ", error);
    };     
  }
  useEffect(()=>{
    if(localStorage.getItem('id')){
      takedatalogin();
    }
  },[])
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Header
          handleLogin={handleLogin}
          setOpenChangePass={setOpenChangePass}
        />
        <Login
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          setOpenFormRegister={setOpenFormRegister}
          roleLogin={roleLogin}
        />
        <ChangePass
          openChangePass={openChangePass}
          setOpenChangePass={setOpenChangePass}
        />
        <Register
          openFormRegister={openFormRegister}
          setOpenFormRegister={setOpenFormRegister}
        />
        <FormTest/>
        <Switch>
          <Route path="/pages" component={() => 
                                              <Home/>
          }/>
          <PrivateRoute1 path="/thong-tin">
            <InfoAccount/>
          </PrivateRoute1>
          <PrivateRoute2 path="/so-lien-lac">
            <ContactAccount/>
          </PrivateRoute2>
          <PrivateRoute path="/kiem-tra">
            <TestWeek/>
          </PrivateRoute>
          <PrivateRoute3 path="/diem-danh">
            <RollCall/>
          </PrivateRoute3>
          <Route path="/tin-tuc/:str" component={() => 
                                              <NewsDetail/>
          }/>
          {/* <Route path="/phim" component={() => 
                                              <Film/>
          }/>
          <Route path="/search/:string" component={() => 
                                              <Search/>
          }/> */}
          <Redirect from="/" to="/pages/trang-chu"/>
        </Switch>
        <Footer/>
      </Suspense>
    </div>
    
  );
}
export default withTranslation()(App);

function PrivateRoute({ children, ...rest }) {
  const testID = useSelector(state => state.Login.testID);
  console.log(testID);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (testID!='') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
function PrivateRoute1({ children, ...rest }) {
  const acc = useSelector(state => state.Login.acc);
  console.log(acc);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (acc.studentId || acc.userId) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
function PrivateRoute3({ children, ...rest }) {
  const acc = useSelector(state => state.Login.acc);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (acc.userId) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
function PrivateRoute2({ children, ...rest }) {
  const acc = useSelector(state => state.Login.acc);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (acc.studentId) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
