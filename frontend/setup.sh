#AWS Amplify uses the environment name specified in the amplify/team-provider-info.json
# file to identify which environment to use for a particular command. This file is
# generated by Amplify when you create a new environment, and it contains information
# about the environment such as its name, ID, and provider.

#When you run an Amplify command such as amplify init or amplify push, Amplify looks
# for the team-provider-info.json file in your project directory to determine which
# environment to use. The environment name is specified in the envName property of the file.


amplify init
amplify add hosting
amplify publish