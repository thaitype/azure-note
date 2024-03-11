# 02 App Service Node.js

## How to deploy

```bash
cd 02-app-service-nodejs
zip release.zip ./* -r
# az webapp deploy --resource-group rg-azure-note-ep2 --name thaitype-azure-note-ep2 --src-path ./release.zip --type zip --async true
az webapp config appsettings set --resource-group rg-azure-note-ep2 --name thaitype-azure-note-ep2 --settings WEBSITE_RUN_FROM_PACKAGE="1"
az webapp deployment source config-zip --resource-group rg-azure-note-ep2 --name thaitype-azure-note-ep2 --src /release.zip
```

## How to cancel deployment

```
az webapp deployment source delete --name thaitype-azure-note-ep2 --resource-group rg-azure-note-ep2
```

## Run the package

For Read only file system, we can use `WEBSITE_RUN_FROM_PACKAGE` to run the package.

```bash
az webapp deployment source config-zip --resource-group <group-name> --name <app-name> --src <filename>.zip
# Ref: https://learn.microsoft.com/en-us/azure/app-service/deploy-run-package#run-the-package
```

Ref:
- https://learn.microsoft.com/en-us/azure/app-service/deploy-run-package