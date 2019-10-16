import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Notes } from "./Pages/Notes";
import "./App.css";
import { SideBar } from "./components/SideBar";
import { NotesContextProvider } from "./context/Index";
import { SettingsContextProvider } from "./context/Index";
import { Archived } from "./Pages/Archived";
import { Trash } from "./Pages/Trash";

function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      show: () => (
        <div>
          <Notes />
        </div>
      )
    },
    {
      path: "/archived",
      show: () => (
        <div>
          <Archived />
        </div>
      )
    },
    {
      path: "/trash",
      show: () => (
        <div>
          <Trash />
        </div>
      )
    }
  ];

  const sidebarInit = "sidebar-main";
  const colorThemeInit = 1;
  const activeNav = 1;

  return (
    <SettingsContextProvider
      sidebar={sidebarInit}
      colorTheme={colorThemeInit}
      activeNav={activeNav}
    >
      <Router>
        <div className="top-bottom">
          {/* header  */}

          <div className="content">
            <Header />
            <NotesContextProvider>
              <div className="main-body">
                <SideBar class="sidebar-main" />

                <div className="items-area">
                  {routes.map(route => (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact}
                      component={route.show}
                    />
                  ))}
                </div>
              </div>
            </NotesContextProvider>
          </div>

          {/* footer  */}
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </SettingsContextProvider>
  );
}

export default App;
