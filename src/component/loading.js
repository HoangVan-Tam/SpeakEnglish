import React from 'react';
  
function Loading() {
    return (
        <div className="loading d-flex align-items-center justify-content-center">
                <img src={require("../assets/img/Spinner.gif").default} alt='...'></img>
        </div>
    );
}

export default Loading;
