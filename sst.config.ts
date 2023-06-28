import { SSTConfig } from "sst";
import { SITE } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "PuffinSystems-Homepage",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(SITE);
  },
} satisfies SSTConfig;
