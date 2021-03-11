## About The Project

## Getting Started

### Prerequisites

1. Create folder '**probe**'
2. Install NPM packages  :
```sh
npm init
```
3. Create new file '**index.html**' and save in new folder '**public**'
4. Install web server 'serve' from NPM:
```sh
npm install serve --save
```
5. Add custom **start** script into file 'package.json':
<pre>
"scripts": {
        <b>"start": "serve ./public",</b>
        "test": "echo \"Error: no test specified\" && exit 1"
},
</pre>
6. Run custom **start** script:
```
npm run start
```
7. Add to **.git\info\exclude**:
```
modules
package-lock.json
package.json
```