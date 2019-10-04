import React, { useState } from "react";

export const Context = React.createContext({ A: "we this" });

export const Provider = props => {
  const { sidebar, colorTheme, activeNav, children } = props;
  const [sidebarStatus, ToggleSidebarStatus] = useState(sidebar);
  const [activeNavStatus, updateActiveNavStatus] = useState(activeNav);
  const [showBars, setShowBars] = useState(true);

  const settingsContext = {
    showBars,
    setShowBars,
    activeNavStatus,
    updateActiveNavStatus,
    sidebarStatus,
    ToggleSidebarStatus,
    colorTheme,
    children
  };

  return (
    <Context.Provider value={settingsContext}>{children}</Context.Provider>
  );
};

export const { Consumer } = Context;
