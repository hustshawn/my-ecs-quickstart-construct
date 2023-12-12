import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "hustshawn",
  authorAddress: "hustshawn@gmail.com",
  cdkVersion: "2.114.1",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.0.0",
  name: "demo-awscdk-construct",
  projenrcTs: true,
  repositoryUrl: "https://github.com/hustshawn/my-ecs-quickstart-construct.git",
  publishToPypi: {
    distName: "demo-awscdk-construct",
    module: "demo_awscdk_construct",
  },
  prettier: true,
});

project.synth();
