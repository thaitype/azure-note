# Deploy App Service with Az CLI

https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=linux&pivots=development-environment-cli

## Run locally

```bash
npx express-generator 02-app-service-nodejs --view ejs
cd 02-app-service-nodejs && npm install
DEBUG=myexpressapp:* npm start
```

## Deploy 
```bash
az login
az webapp up --name thaitype-azure-note-ep2 --resource-group "rg-azure-note-ep2"
```

## Create app service and Deploy
This will create random name for the app service, with free tier

```bash
az login
az webapp up --sku F1
```

