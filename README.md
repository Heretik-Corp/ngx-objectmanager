# ngx-objectmanager

## To Use
1. Install the package
```
npm install --save ngx-objectmanager
```
2. Import the module 
```
@NgModule({
...
  imports: [
    ...
    NgxobjectmanagerModule.forRoot()
    ...
]
...
})
export class AppModule { }
```
3. Constructor inject the service

## To Dev

1. Clone the repo
2. At the top level, `npm install` and `npm test`
3. Once your feature is ready, submit a PR

## To Dev side by side with existing project

1. Build the `ngxobjectmanager` project with `npm run build-ci`
2. `cd dist/ngxobjectmanager && npm link`
3. In your project, `npm link ngxobjectmanager`
4. Updates to the dist folder will be linked in your project

## To Publish 

1. Be an admin or talk to one
2. `cd` into `projects/ngxobjectmanager`
3. Run `npm version (major|minor|path)`
4. Run `git push --follow-tags`
5. Travis will publish that tag to the npm registry
