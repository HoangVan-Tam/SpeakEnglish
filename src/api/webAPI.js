  
import axiosApi from "./Config";

const webApi = {
    //---------- login acc --------//
    LoginStudent : (params) => {
        const url = '/api/auth/login';
        return axiosApi.post(url, {...params});
    },
    LoginTeacher: (params) => {
        const url = '/api/auth/employee/login';
        return axiosApi.post(url, {...params});
    },
    //---------- get all course ------//
    getAllCourse : () => {
        const url = '/api/course/All';
        return axiosApi.get(url);
    },
    //--------- get all news ---------//
    getAllNews : () => {
        const url = '/api/news/all';
        return axiosApi.get(url);
    },
    //-------- get detail news ------//
    getDetailNews : (id) => {
        const url = '/api/news/'+id;
        return axiosApi.get(url);
    },
    //-------- remember user -------//
    getInfoUser : (id) => {
        const url = '/api/auth/GetInfo/'+id;
        return axiosApi.get(url);
    },
}
export default webApi;