import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MyEcs } from '../src';

describe('MyEcs', () => {
  test('synthesize the way we expect', () => {

    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'MyStack');
    new MyEcs(stack, 'MyEcs');

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::ECS::Service', {});

  });
});
