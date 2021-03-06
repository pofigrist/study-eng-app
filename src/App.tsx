import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MainPage} from "./pages";
import {TrainPage} from "./pages/train";
import {Pages} from "./constants";
import {Header} from "./smart-components/header";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {Wrapper} from "./smart-components/wrapper";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { Manage } from "./pages/manage";
import {combinedReducers} from "./store";
import thunk from 'redux-thunk';
const { Content } = Layout;

const store = createStore(combinedReducers, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Wrapper>
                <Layout>
                <Header/>
                    <Content style={{ padding: "0 50px" }}>
                    <Switch>
                    <Route path={Pages.Train}>
                        <TrainPage/>
                    </Route>
                    <Route path={Pages.Manage}>
                        <Manage/>
                    </Route>
                    <Route path={Pages.Main}>
                        <MainPage/>
                    </Route>
                </Switch>
                    </Content>
                </Layout>
            </Wrapper>
        </BrowserRouter>
    </Provider>
);

export default App;
