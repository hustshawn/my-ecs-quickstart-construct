import {
  aws_ec2 as ec2,
  aws_ecs as ecs,
  aws_ecs_patterns as ecsPatterns,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';


export interface MyEcsProps {
  readonly vpc?: ec2.IVpc;
}

export class MyEcs extends Construct {
  readonly endpoint: string;
  constructor(scope: Construct, id: string, props: MyEcsProps = {}) {
    super(scope, id);
    const vpc = props.vpc ?? new ec2.Vpc(this, 'vpc', {
      natGateways: 1,
    });

    const svc = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'Service', {
      vpc,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('nginx'),
      },
    });
    this.endpoint = `http://${svc.loadBalancer.loadBalancerDnsName}`;
  }
}
