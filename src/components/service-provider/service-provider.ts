import React from "react";

const {
  Provider: ServiceProvider,
  Consumer: ServiceConsumer
} = React.createContext(null);

export { ServiceProvider, ServiceConsumer };
