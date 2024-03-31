import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { Config, StackContext, SvelteKitSite } from "sst/constructs";

export function SITE({ stack }: StackContext) {
  const DOMAIN_NAME = new Config.Parameter(stack, "DOMAIN_NAME", {
    value: "mli.puffinsystems.com",
  });
  const site = new SvelteKitSite(stack, "Site", {
    path: "frontend/",
    bind: [DOMAIN_NAME],
    customDomain: {
      isExternalDomain: true,
      domainName: "mli.puffinsystems.com",
      cdk: {
        certificate: Certificate.fromCertificateArn(
          stack,
          "mycert",
          process.env.CERT_ARN ?? ""
        ),
      },
    },
  });

  stack.addOutputs({
    URL: site.url,
  });
}
