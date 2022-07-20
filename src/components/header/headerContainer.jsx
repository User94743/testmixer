import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Header from "./header";
import {setLanguage} from "../../redux/mainReducer";



let mapStateToProps = (state) => {
    return {
        currentDescription: state.MainPage.currentDescription
    }
}

export default compose(connect(mapStateToProps, {setLanguage}), withRouter) (Header);