# React Native with AWS Lambda via Serverless

A React Native starter app with AWS Lambda serverless config baked in

### Prerequisites

1. You will need serverless installed

```
npm install -g serverless
```
2. You will need an Amazon AWS account (the free version will suffice)
https://aws.amazon.com/free/

### AWS Setup

##### Create a user for your service

1. Go to https://console.aws.amazon.com/iam/home?region=us-east-1#/users
2. Click **Add user**
3. Give your user a **User name** and select **Programmatic access**
4. Click **Next: Permissions**
5. Choose **Attach existing policies directly**
6. Check **Administrator Access**
7. Choose **Next** then **create user**
8. Click **Download .csv**

**Note from the serverless team**
>Note: In a production environment, we recommend reducing the permissions to the IAM User which the Framework uses. Unfortunately, the Framework's functionality is growing so fast, we can't yet offer you a finite set of permissions it needs (we're working on this). Consider using a separate AWS account in the interim, if you cannot get permission to your organization's primary AWS accounts.

### Installing

```
git clone https://github.com/leejms/rn-serverless-aws.git
yarn or npm install
```

Copy your credentials.csv to the **api** folder (do **not** check this file into source control)

## Deploying your test service

This repo comes with a sample service ready to deploy

```
cd api
./deployAPI.sh
```

You should see something like this:

```
Dploying for user RNServerlessIAM
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (990 B)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............
Serverless: Stack update finished...
Service Information
service: serverless-hello-world
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  GET - https://yourserviceuri.amazonaws.com/dev/hello-world
functions:
  helloWorld: serverless-hello-world-dev-helloWorld
Serverless: Removing old service versions...
```

copy & paste your url in a browser and you should see this returned:
```
{"message":"You are now ServerLess!"}
```

## Using your new service in React Native

edit **index.ios.js** or **index.android.js** and replace `let apiURL = 'xxx'` with your url from above

run `react-native run-ios`

## Built With

* [React Native](https://facebook.github.io/react-native/)
* [Serverless](https://serverless.com)
* [AWS Lambda](http://docs.aws.amazon.com/lambda/latest/dg/use-cases.html) <= see common use cases

## Authors

* **Lee Johnson**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


