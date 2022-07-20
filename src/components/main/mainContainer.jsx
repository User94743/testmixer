import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Main from "./main";


let mapStateToProps = (state) => {
    return {
        currentDescription: state.MainPage.currentDescription
    }
}

export default compose(connect(mapStateToProps, {}), withRouter) (Main);