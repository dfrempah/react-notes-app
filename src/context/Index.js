import React from "react";

export const SidebarContext = React.createContext("sidebar-hidden");

export const SidebarContextProvider = SidebarContext.Provider;
export const SidebarContextConsumer = SidebarContext.Consumer;
