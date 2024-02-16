import { Config, StackContext, SvelteKitSite } from "sst/constructs";

export function SITE({ stack }: StackContext) {
  const DOMAIN_NAME = new Config.Parameter(stack, "DOMAIN_NAME", {
    value: "puffinsystems.com",
  });
  const site = new SvelteKitSite(stack, "Site", {
    path: "puffinsystems_homepage",
    bind: [DOMAIN_NAME],
    customDomain: {
      domainName: DOMAIN_NAME.value,
    },
  });

  stack.addOutputs({
    URL: site.url,
  });
}
