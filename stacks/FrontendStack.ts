import { Config, StackContext, SvelteKitSite } from "sst/constructs";

export function SITE({ stack }: StackContext) {
  const DOMAIN_NAME = new Config.Parameter(stack, "DOMAIN_NAME", {
    value: "mli.puffinsystems.com",
  });
  const site = new SvelteKitSite(stack, "Site", {
    path: "frontend/",
    bind: [DOMAIN_NAME],
    customDomain: {
      domainName: "mli.puffinsystems.com",
      domainAlias: "www.mli.puffinsystems.com",
      hostedZone: "puffinsystems.com",
    },
  });

  stack.addOutputs({
    URL: site.url,
  });
}
