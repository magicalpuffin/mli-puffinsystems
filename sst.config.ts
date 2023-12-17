import { SSTConfig } from "sst";
import { SITE } from "./stacks/MyStack.js";

export default {
  config(_input) {
    return {
      name: "PuffinSystems-Homepage",
      region: "us-west-1",
    };
  },
  stacks(app) {
    app.stack(SITE);
  },
} satisfies SSTConfig;
