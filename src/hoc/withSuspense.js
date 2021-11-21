import {Redirect} from "react-router-dom";
import React, {Suspense} from "react";
import {connect} from "react-redux";

export const withSuspense = (Component) => {

    return (props)=>{
        return <Suspense fallback={<div>Loading..</div>}>
            <Component {...props}/>
        </Suspense>
    }
}
