import * as cdk from "aws-cdk-lib";

import { MyEcs } from ".";

const app = new cdk.App();
const stack = new cdk.Stack(app, "MyStack");
new MyEcs(stack, "MyEcs");
