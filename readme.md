Set up projecy
1.- create folder 'probe'
2.- Initialize with npm: npm init
3.- Create new file 'index.html' and save in new folder 'public'
4.- Install web server 'serve' from npm: npm install serve --save
5.- Add custom start script into file 'package.json':
"scripts": {
    "start": "serve ./public",
    "test": "echo \"Error: no test specified\" && exit 1"
},