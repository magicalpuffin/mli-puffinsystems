import { SSTConfig } from "sst";
import { SITE } from "./stacks/FrontendStack.js";

export default {
  config(_input) {
    return {
      name: "mli-puffinsystems",
      region: "us-west-1",
    };
  },
  stacks(app) {
    app.stack(SITE);
  },
} satisfies SSTConfig;
