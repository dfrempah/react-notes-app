import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Notes } from "./Pages/Notes";
import { TextArea } from "./components/TextArea";
import "./App.css";
import { SideBar } from "./components/SideBar";
import { SettingsContextProvider } from "./context/Index";

function App() {
  const sidebarInit = "sidebar-main";
  const colorThemeInit = 1;
  const activeNav = 1;

  return (
    <SettingsContextProvider
      sidebar={sidebarInit}
      colorTheme={colorThemeInit}
      activeNav={activeNav}
    >
      <div className="top-bottom">
        {/* header  */}

        <div className="content">
          <Header />

          {/* body with 3 sides  */}
          <div className="main-body">
            <SideBar class="sidebar-main" />

            <div className="items-area">
              <div className="text-holder">
                <TextArea />
              </div>
              <Notes />
            </div>
          </div>
        </div>

        {/* footer  */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </SettingsContextProvider>
  );
}

export default App;
