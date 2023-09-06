import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import styleCl from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {addPost, updateNewPostText} from "./Redux/state";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile" render={() => <Profile
                            state={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}
                        />
                        <Route path="/dialogs"
                               render={() => <Dialogs store={props.store}/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


