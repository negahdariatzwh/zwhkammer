import { React, useContext } from "react";
import { Switch, Route } from "react-router";
import Main_Context from "../context/MainContext";
import Projects from "../page/Projetcts";
import MainPage from "../page/MainPage";
import Institutes from "../page/Institiuts";
import Institute from "../page/Institute";
import InsType from "../page/InsType";
import InsTypes from "../page/InsTypes";
import Project from "../page/Project";
import User from "../page/User";
import Users from "../page/Users";
import NewLayout from "../layout/NewLayout";
import Apis from "../page/Apis";
import Api from "../page/Api";
import Controller from "../page/Controller";
import Permission from "../page/Permission";
function MainRouter() {
  const { pages } = useContext(Main_Context);
  const components = {
    home: MainPage,
    Projects: Projects,
    Institutes: Institutes,
    Institute: Institute,
    InsType: InsType,
    InsTypes: InsTypes,
    Project: Project,
    User: User,
    Users: Users,
    Api: Api,
    Apis: Apis,
    Controller: Controller,
    Permission: Permission,
  };
  return (
    <NewLayout>
      <Switch>
        {pages.map((item) => (
          <Route
            key={item._id}
            path={item.route}
            exact={true}
            component={components[item.name]}
          />
        ))}
      </Switch>
    </NewLayout>
  );
}

export default MainRouter;
