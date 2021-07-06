import React from "react";

const ActiveTabContext = React.createContext();

const ActiveTabProvider = ActiveTabContext.Provider;
const ActiveTabConsumer = ActiveTabContext.Consumer;

export { ActiveTabContext };
export { ActiveTabProvider, ActiveTabConsumer };
