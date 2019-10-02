import React from "react";

export const SidebarContext = React.createContext({
  className: "sidebar-main",
  updater: () => {}
});

export const SidebarContextProvider = SidebarContext.Provider;
export const SidebarContextConsumer = SidebarContext.Consumer;
