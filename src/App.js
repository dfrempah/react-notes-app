import React, { useContext, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Notes } from "./Pages/Notes";
import { TextArea } from "./components/TextArea";
import "./App.css";
import { SideBar } from "./components/SideBar";
import { SidebarContextProvider } from "./context/Index";
import { SidebarContext } from "./context/Index";

function App() {
  const [sidebarStatus, setSidebarStatus] = useState("sidebar-main");
  const sidebar = useContext(SidebarContext);

  // console.log(sidebar);
  return (
    <SidebarContextProvider
      value={{
        className: sidebarStatus,
        updater: setSidebarStatus
      }}
    >
      <div className="top-bottom">
        {/* header  */}

        <div className="content">
          <Header />

          {/* body with 3 sides  */}
          <div className="main-body">
            <SideBar class={sidebarStatus} />

            <div className="items-area">
              {/* <div className="text-box">
                {/* <div className="inner-text-box">
                  <TextArea />
                </div> */}
              {/* </div> */}
              <Notes />
            </div>
          </div>
        </div>
        {/* footer  */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </SidebarContextProvider>
  );
}

export default App;
