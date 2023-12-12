import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'hustshawn',
  authorAddress: 'hustshawn@gmail.com',
  cdkVersion: '2.114.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'demo-awscdk-construct',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/hustshawn/my-ecs-quickstart-construct.git',

  // deps: [
  //   'aws-cdk-lib',
  // ],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@types/node',
    '@types/mocha',
  ], /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();