To create a component

```
pnpm exec nx generate @schematics/angular:component \
  --name=navbar \
  --project=simple-finance-tracker \
  --style=scss \
  --changeDetection=OnPush \
  --path=src/app/auth-layout/ui \
  --no-interactive \
  --dry-run
```
