# 02 App Service Node.js

## How to deploy

```bash
cd 02-app-service-nodejs
zip release.zip ./* -r
az webapp deploy --resource-group rg-azure-note-ep2 --name thaitype-azure-note-ep2 --src-path ./release.zip --type zip --async true
```

## How to cancel deployment

```
az webapp deployment source delete --name thaitype-azure-note-ep2 --resource-group rg-azure-note-ep2
```


## Note

Azure App Service do not support pnpm
https://github.com/microsoft/Oryx/issues/2340