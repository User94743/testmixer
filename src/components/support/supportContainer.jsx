import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Support from "./support";

let mapStateToProps = (state) => {
    return {
        lang: state.MainPage.language,
        currentDescription: state.MainPage.currentDescription
    }
}

export default compose(connect(mapStateToProps, {}), withRouter) (Support);