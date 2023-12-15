import { App, Stack, aws_ec2 as ec2 } from "aws-cdk-lib";

import { MyEcs } from ".";

const app = new App();
const stack = new Stack(app, "MyStack");

// get default vpc
const vpc = ec2.Vpc.fromLookup(stack, "Vpc", { isDefault: true });
new MyEcs(stack, "MyEcs", { vpc });
