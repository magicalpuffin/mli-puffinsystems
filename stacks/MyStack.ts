import { SvelteKitSite } from "sst/constructs";
import { StackContext, Api, EventBus } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export function SITE({ stack }: StackContext) {
  let CERTIFICATE_ARN = "";

  if (process.env.CERTIFICATE_ARN) {
    CERTIFICATE_ARN = process.env.CERTIFICATE_ARN;
  }

  const site = new SvelteKitSite(stack, "Site", {
    path: "puffinsystems_homepage",
    customDomain: {
      domainName: "puffinsystems.com",
    },
  });

  stack.addOutputs({
    URL: site.url,
  });
}
