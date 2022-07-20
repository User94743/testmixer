import logo from './logo.svg';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import MainContainer from "./components/main/mainContainer";
import HeaderContainer from "./components/header/headerContainer";
import SupportContainer from "./components/support/supportContainer"
import {compose} from "redux";
import {connect} from "react-redux";
import Main from "./components/main/main";
import {setInit, setLanguage} from "./redux/mainReducer";

const App = (props) => {
    console.log(props.init)
    if (props.init === 0) {
        let language = window.navigator ? (window.navigator.language ||
            window.navigator.systemLanguage ||
            window.navigator.userLanguage) : "en";
            language = language.slice(0, 2);
            console.log(language);
            props.setLanguage(language);
            props.setInit();
    }

    return (
    <div>
        <HeaderContainer />
      <Switch>
        <Route exact path='/' render={() => <Redirect to={'/main'} />}/>
        <Route path='/main' component={MainContainer} />
        <Route path='/support' component={SupportContainer} />
      </Switch>

    </div>
  );
}

let mapStateToProps = (state) => {
    return {
        init: state.MainPage.init
    }
}

export default compose(connect(mapStateToProps, {setLanguage, setInit}), withRouter) (App);
