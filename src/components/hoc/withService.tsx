import React from "react";

import { ServiceConsumer } from "../service-provider";

const withService = (Wrapped: Function) => {
  return props => (
    <ServiceConsumer>
      {service => <Wrapped {...props} service={service} />}
    </ServiceConsumer>
  );
};

export default withService;
