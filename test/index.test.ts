import * as cdk from "aws-cdk-lib";
// import { aws_ec2 as ec2 } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { MyEcs } from "../src";

describe("MyEcs", () => {
  test("Match snapshot", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "MyStack");
    new MyEcs(stack, "MyEcs");
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });

  test("Check ALB", () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "MyStack");
    new MyEcs(stack, "MyEcs");
    const template = Template.fromStack(stack);
    // check the template has alb created
    template.hasResourceProperties(
      "AWS::ElasticLoadBalancingV2::LoadBalancer",
      {
        Type: "application",
      },
    );
  });
});
