import { Config, StaticSite } from "sst/constructs";
import { StackContext, Api, EventBus } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export function SITE({ stack }: StackContext) {
  let CERTIFICATE_ARN = "";

  if (process.env.CERTIFICATE_ARN) {
    CERTIFICATE_ARN = process.env.CERTIFICATE_ARN;
  }

  const site = new StaticSite(stack, "svelte", {
    path: "puffinsystems_homepage",
    buildOutput: "build",
    buildCommand: "npm run build",
    customDomain: {
      domainName: "puffinsystems.com",
      cdk: {
        certificate: Certificate.fromCertificateArn(
          stack,
          "MyCert",
          CERTIFICATE_ARN
        ),
      },
    },
  });

  stack.addOutputs({
    URL: site.url,
  });
}
