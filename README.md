# express-lambda
Deploy an express app to aws lambda using serverless

Steps:
configure serverless on local
 - serverless config credentials --provider provider --key key --secret secret
 
Test on local
 - npm install
 - npm start

Deploy on aws
 - npm run deploy

This will create a lambda function "express-app-dev-hello" and "express-app" http api in API Gateway.

Copy endpoint url once deployed and test on browser
GET {url}/
GET {url}/users
POST {url}/users/create
