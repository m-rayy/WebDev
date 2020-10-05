# Complete-Web-Developer-Manual


All resources and notes from the Complete Web Developer in 2020: Zero to Mastery course

Official resources:
https://zerotomastery.io/resources/

Unofficial resources (open source document contributed by a student):
https://zero-to-mastery.github.io/resources/

******************************************************************************************
## 1.	__Introduction__

Discord Channel:
*	~~https://discord.gg/nVmbHYY~~ You will find it inside course
******************************************************************************************
## 2.	__How The Internet Works__

Tools:
*	Chrome Developer Tools

Topics:
*	ISP, DNS and Servers
*	Traceroute (Windows: tracert)

Submarine Cable Map:
*	https://www.submarinecablemap.com/
******************************************************************************************
## 3.	__History Of The Web__

Maps that explain the Internet:
*	https://www.vox.com/a/internet-maps

First Webpage in the world:
*	http://info.cern.ch/hypertext/WWW/TheProject.html

Optional Videos:
*	https://www.youtube.com/watch?v=3QhU9jd03a0&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&index=29
*	https://www.youtube.com/watch?v=AEaKrq3SpW8&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&index=30
*	https://www.youtube.com/watch?v=guvsH5OFizE&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&index=31

******************************************************************************************
## 4. __HTML 5__


Install a text editor (Select one):
*	https://www.sublimetext.com/
*	https://atom.io/
*	https://code.visualstudio.com/
* 	TODO: Useful vscode html extensions: https://code.visualstudio.com/docs/languages/html

Tags:
*	`<html>`
*	`<head>`
*	`<title>`
*	`<body>`
*	headings (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)
*	paragraph `<p>`
*	bold `<strong>`, italic `<em>`
*	ordered list `<ol>`, unordered list `<ul>`, list item`<li>`
*	break `<br>`, horizontal rule `<hr>`
*	image `<img>` and attributes: `src`, `width`, `height`
*	anchor `<a href="">`

Topics:
*	Relative vs Absolute Path

Zero to Mastery resources:
*	https://github.com/zero-to-mastery/complete-web-developer-manual
*	https://github.com/zero-to-mastery/zero-to-mastery-captions

Reference websites:
*	https://www.w3schools.com/
*	https://developer.mozilla.org/en-US/
*	https://stackoverflow.com/


******************************************************************************************
## 5.	__Advanced HTML 5__


Tags:
*	`<form>`
	*	`method`, `action`
*	`<input>`:
	*	`type`= `"text"`, `"submit"`, `"reset"`, `"email"`, `"date"`, `"radio"`, `"password"`
	*	`required`, `value`, `name`, `min`
*	dropdown `<select>`
	*	option `<option>`
*	comment `<!-- -->`
*	`<div>` and `<span>`

Semantic Elements
*	`<header>`
*	`<nav>`
*	`<main>`
*	`<footer>`

Topics:
*	Chrome view Source

Resources:
*   https://www.w3schools.com/html/html5_semantic_elements.asp
*	https://waitbutwhy.com/
* 	Quiz: https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML
* 	TODO: Exercises: https://www.w3schools.com/html/exercise.asp?filename=exercise_html_attributes1
*	TODO: Course after CSS: https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5

Quizes & Exercises:


> "__If you take one thing from this, it is this__: Don't worry if you don't feel 100% confident in HTML. Keep going as we will keep building on top of this knowledge."


******************************************************************************************
## 6.	__CSS__

Syntax:
```css
Selector {
	property: value;
}
```

How to:
*	External
	```html
	<link rel="stylesheet" type="text/css" href="style.css">
	```
*	Internal
	```html
	<style>
		body {
			background-color: purple;
		}
	</style>
	```
*	Inline
	```html
	<header style="background-color: green;">
	```

Tools:
*	Chrome Inspector

Properties:
*	text-align
*	border
*	background
*	list-style
*	cursor
*	color: html, hex, rgb or rgba

Selectors:
*	`.class`
*	`#id`
*	`*` (all elements)
*	`element`
*	`element, element`
*	`element element`
*	`element > element`
*	`element + element`
*	`v:hover`
*	`:last-child`
*	`:first-child`
*	`!important` (not recommended)

Text Properties
*	`text-decoration`
*	`text-transform`
*	`line-height`
*	`font-style`
*	`font-weight`
*	`font-size`
*	`font-family`

Layout Properties
*	`float` and `clear`

Box Model
*	`margin`
*	`border`
*	`padding`
*	`width` and `height`

Sizes
*	`px`
*	`em` and `rem`

Topics:
*	Cascading: Specificity, Importance `!`, Source Order
*	Linking fonts and external stylesheets

Exercises:
*	CSS Diner (fun!): https://flukeout.github.io/
*	TODO: Interactive CSS exercises (completed only until CSS Outline): https://www.w3schools.com/css/exercise.asp

Reference websites:
*	CSS Almamanc: https://css-tricks.com/almanac/
*	https://www.supremo.co.uk/typeterms/
*	https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* 	https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Cascada_y_herencia
*	https://specificity.keegan.st/ (specificity test)

Website for free images:
*   https://unsplash.com/

Website for color check:
*	http://paletton.com/
*	https://coolors.co/

Website for fonts download:
*	https://fonts.google.com/


******************************************************************************************
## 7.	__Advanced CSS__

Flexbox
*	`display: flex`
*	`flex-direction`
*	`flex-wrap`
*	`flex-flow`
*	`justify-content`
*	`align-items`
*	`align-content`
*	`order`
*	`flex`: `flex-grow`, `flex-shrink` and `flex-basis`
*	`align-self`

Properties
*	`transition`
*	`transform`
*	`box-shadow`

Tools
*	Chrome Toggle Device: https://codepen.io/
*	Minimise critical render path: https://www.cleancss.com/css-minify/
*	Browser support: https://www.w3schools.com/cssref/css3_browsersupport.asp<br>
	Using the following prefixes for experimental features:<br>
		-moz-     Firefox and other browsers using Mozilla's browser engine<br>
		-webkit-  Safari, Chrome and browsers using the Webkit engine<br>
		-o-       Opera<br>
		-ms-      Internet Explorer (but not always)<br>
*	Report % of global users seeing your elements: https://caniuse.com/

Exercises:
*	http://flexboxfroggy.com/
*   TODO: CSS Course https://www.freecodecamp.org/learn/responsive-web-design/basic-css/

Reference websites:
*	Flexbox guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*	Transitions & transforms: https://robots.thoughtbot.com/transitions-and-transforms
*	Share interactive editable code on codepen.io: https://codepen.io/rachelcope/pen/vOqVjg
*	? http://shouldiprefix.com/
*   ? https://autoprefixer.github.io/

> __If you take one thing from this, it is this__: Don't worry if you don't feel 100% confident in CSS. Keep going as we will keep building on top of this knowledge.

******************************************************************************************
## 8.	__Bootstrap 4, Templates, And Building Your Startup Landing Page__

Reference:
* 	Get started: https://getbootstrap.com/
*	Components: https://getbootstrap.com/docs/4.5/components/alerts/
*	Grid: https://getbootstrap.com/docs/4.5/layout/grid/
*	CDN: https://www.cloudflare.com/learning/cdn/what-is-a-cdn/

Landing page:
* 	HTML <meta> Tag: https://www.w3schools.com/tags/tag_meta.asp
*	Viewport meta tag: https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
*	Viewport meta tag - Apple guide: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html
*	UTF8: https://www.quora.com/What-is-UTF8
*	Perfect Full Page Background Image: https://css-tricks.com/perfect-full-page-background-image/
*	Bootstrap Flex: https://getbootstrap.com/docs/4.3/utilities/flex/

App for creating users list:
*	https://mailchimp.com
*	https://mailchimp.com/help/create-a-landing-page/

Website with animation examples:
*	https://animate.style/

Website for patterns:
*	https://www.creative-tim.com/bootstrap-themes/ui-kit?direction=asc&sort=price
*	http://mashup-template.com/templates.html
*	https://startbootstrap.com/template-categories/all/
*	https://mdbootstrap.com/freebies/
*	https://www.creative-tim.com/
*	https://cruip.com/


Installing Github:
*	https://desktop.github.com/

******************************************************************************************
## 9.	__CSS Grid + CSS Layout__

Cheat Sheets:
*	Grid: http://grid.malven.co/
*	Media Queries: https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

Exercise - Grid Garden:
*	https://cssgridgarden.com/

Free Design resources:
*	https://interfacer.xyz/

******************************************************************************************
## 10.	__Career Of A Web Developer__
******************************************************************************************

TODO:
*	Create personal website
*	Work on 1~2 Big Projects
*	Showcase on GitHub
*	Create a blog (maybe as training progress)

******************************************************************************************
## 11.	__Javascript__

Javascript types:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (new in ECMAScript 6)
7. Object

Javascript comparisons:
- \!==
- \===
- \>=
- \<=
- \>
- \<

Javascript variables:
- var
- let (new in ECMAScript 6)
- const (new in ECMAScript 6)

Javascript conditionals:
- if
- else
- else if
- ternary operator
- switch

Javascript logical operators:
- &&
- ||
- !

Javascript functions:
- var a = function name() {}
- function name() {}
- return
- () => (new in ECMAScript 6)

Javascript data structures:
- Array
- Object

Javascript looping:
- for
- while
- do
- forEach (new in ECMAScript 5)

Javascript keywords:
- break
- case
- catch
- class
- const
- continue
- debugger
- default
- delete
- do
- else
- export
- extends
- finally
- for
- function
- if
- import
- in
- instanceof
- new
- return
- super
- switch
- this
- throw
- try
- typeof
- var
- void
- while
- with
- yield

Reference websites:
*	JS array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp

******************************************************************************************
## 12.	__DOM Manipulation__

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

Reference websites:
*	https://www.w3schools.com/js/js_htmldom.asp
*	https://developer.mozilla.org/en-US/docs/web/Events
*	https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*	https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/
*	https://jquery.com/
*	http://youmightnotneedjquery.com/
*	https://babeljs.io/

TODO: DOM-events exercise (BONUS & ADDITIONAL BONUS)
TODO: Background Generator (BONUS)


******************************************************************************************
## 13.	__Advanced Javascript__
******************************************************************************************

Reference websites:
*	Convert all JS code to run in ALL browsers: https://babeljs.io
*	Array explorer: https://sdras.github.io/array-explorer/
*	JS Comparison Table: https://dorey.github.io/JavaScript-Equality-Table/
*	Equality comparisons 1: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
*	Equality comparisons 2:	https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
*	TODO: (maybe) JS course: https://www.udemy.com/course/advanced-javascript-concepts/?referralCode=5A4CCA2C2FC6BA53CC29
*	Brief history of JS Modules: https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde
*	ES modules (deep-dive): https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
* 	TODO: https://github.com/getify/You-Dont-Know-JS (book series)
*	TODO: https://javascript.info/
*	TODO: http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/
*	Problem solving skills: https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2
* 	TODO: Coding challenges - https://coderbyte.com/

TODO: 12_challenge Question 3 (reverse converter + automatic multi-way converter)


******************************************************************************************
## 14. __Command Line__



FOR MAC OR LINUX:


Command | Description
--- | ---
ls  | lists files and folders within working directory
pwd | show current working directory
cd  | change working directory to user directory
cd .. | change working directory to direct parent directory
clear | clear current terminal screen
cd / | change current directory to root directory
cd ~ | change current directory to user directory
cd path/to/folder | changes working directory to specified path
mkdir name | create folder called 'name' within current directory
open foldername | opens folder called 'foldername' using OS GUI
touch index.html | creates new file titled index.html within working directory
open  index.html | opens file named index.html using default system program
open -a “Sublime Text” | opens sublime text program. This syntax can be used to open other programs
open . | opens and displays current folder within OS GUI
mv index.html about.html | renames index.html file to about.html
up and down arrow | cycles through previous commands typed within current terminal session
rm filename | deletes a file called 'filename' within the current directory
rm -r foldername | used to delete folders. In this case 'foldername' will be deleted
say hello (only on Mac) | the mac will speak any text you enter after the 'say' keyword


FOR WINDOWS:


```cmd
dir - list files
cd {directory name} - change directory
cd / - go to root (top) directory
cd .. - go up a level
mkdir {file name} - make a directory
echo > {filename} - create an empty file
del {filename} - remove a file
rmdir {directory name} - remove a directory and all files within
rename {filename} {new filename} - rename a file or folder
start {filename} - open file in default program
start . - open current directory
cls - clear the terminal screen
```


******************************************************************************************
## 15.	__Developer Environment__

Popular code editors:
* [Sublime Text 3](https://www.sublimetext.com/3)
* [Visual Studio Code](https://code.visualstudio.com/)
* TODO: Check recommended VSCode extensions for web developers: https://scotch.io/bar-talk/22-best-visual-studio-code-extensions-for-web-development
* [Atom](https://atom.io/)


******************************************************************************************
## 16.	__Git + Github + Open Source Projects__



Install Git:
*	https://www.atlassian.com/git/tutorials/install-git#windows
*	https://www.atlassian.com/git/tutorials/install-git


```
git clone “https:……”
git status
git add “filename”
git add .
git commit –m”message”
git push
git pull
git branch
git branch “name”
git checkout “name”
git merge “name”
```


Once you are in your forked project directory in your command prompt....



1.	Type git remote -v and press Enter. You'll see the current configured remote repository for your fork.

	a.	```git remote -v```


	b.	```origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)```


	c.	```origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)```


2.	Type git remote add upstream, and then paste the URL you would copy from the original repository if you were to do a git clone. Press Enter. It will look like this:


	```
	git remote add upstream https://github.com/zero-to-mastery/PROJECT_NAME.git
	```


3.	To verify the new upstream repository you've specified for your fork, type ```git remote -v``` again. You should see the URL for your fork as origin, and the URL for the original repository as upstream.


4.	Now, you can keep your fork synced with the upstream repository with a few Git commands.
	One simple way is to do the below command from the master of your forked repository:
```git pull upstream master```

Syncing a fork:
```
git remote -v
git remote add upstream <git_repo_url>
git remote -v
```
Or alternatively try this:
https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork


Resources (Contributing to Open Source):
*	https://github.com/zero-to-mastery
*	https://github.com/zero-to-mastery/start-here-guidelines*	


******************************************************************************************
## 17.	__A Day In The Life Of A Developer__
******************************************************************************************

******************************************************************************************
## 18.	__NPM + NPM Scripts__

Install node and npm:
*	https://www.npmjs.com/get-npm
*	https://nodejs.org/en/
*	https://docs.npmjs.com/try-the-latest-stable-version-of-npm
*	Version calculator: https://semver.npmjs.com/
*	

Initialise npm (create package.json file in project)
```
npm init
```

The package.json file serves as a dependency file.
I.E. the node_modules could be deleted before a commit and re-initiated with:
```
npm install
```
Dependencies only required in the development phase and not shipped to production are saved under devDependencies.

To (globally) install additional packages available from the npm repository, use:
```
npm install –g browserify
```
To (locally) install additional packages, use:
```
npm install browserify
```

Packages:
*	https://www.npmjs.com/

Global packages in example:
*	https://www.npmjs.com/package/live-server
*	https://www.npmjs.com/package/browserify to load modules & bundle scripts:
	```
	browserify script.js > bundle.js
	```
	You will need to re-bundle after any JS changes.
	You can add the bundle script as 'build' in the package.json file to speed it up:
	```
	"scripts": {
    	"build": "browserify script.js > bundle.js"
  	}
	```
	You can call this script in the CLI with:
	```
	npm run build
	```
	You can expand your script to also run live-server on build:
	```
	"scripts": {
    	"build": "browserify script.js > bundle.js && live-server"
  	}
	```

Local packages in example:
*	https://www.npmjs.com/package/lodash
*	https://lodash.com/

Simplefolio:
*	Repo: https://github.com/cobidev/simplefolio
*	Logo maker: https://hatchful.shopify.com/
*	CSS vs SCSS (SASS): https://stackoverflow.com/questions/46400443/what-is-the-difference-between-css-and-scss
*	TODO: full modification & deployment with [Netlify](https://netlify.com/)


******************************************************************************************
## 19.	__React.js + Redux__

create-react-app v1:
*	https://www.npmjs.com/package/create-react-app
*	https://github.com/facebook/create-react-app
*	https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack

create-react-app v2:
*	https://reactjs.org/blog/2018/10/01/create-react-app-v2.html

create-react-app v3:
*	https://create-react-app.dev/docs/getting-started/
*	https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b

```
npm install –g create-react-app
create-react-app “name”
npm start
npm install tachyons
```

Action --> Reducer --> Store --> Make changes

```
npm install redux
npm install react-redux
npm install redux-logger
npm install redux-thunk
```

Reference websites:
*	Fonts: http://www.cufonfonts.com/en
*	https://reactjs.org/docs/react-component.html
*	Test data: https://jsonplaceholder.typicode.com
*	http://atomicdesign.bradfrost.com/
*	https://robohash.org
*	CSS styles: https://tachyons.io/docs/elements/forms/
*	Service workers: https://developers.google.com/web/fundamentals/primers/service-workers/
*	Fragments: https://blog.logrocket.com/rendering-sibling-elements-react-fragments/
*	Handling Events: https://reactjs.org/docs/handling-events.html
*	Font-face: https://css-tricks.com/snippets/css/using-font-face/
*	JSON placeholder for users: https://jsonplaceholder.typicode.com/users
* 	Component lifecycle: https://reactjs.org/docs/react-component.html
*   Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
*	GitHub pages for CRA: https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom

*	https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
*	https://reacttraining.com/react-router/
*	https://ramdajs.com/
*	https://lodash.com
*	https://glamorous.rocks
*	https://www.styled-components.com
*	https://github.com/css-modules/css-modules
*	https://www.gatsbyjs.org
*	https://zeit.co/blog/next5
*	www.material-ui.com/#/components/app-bar
*	https://react.semantic-ui.com/elements/button
*	https://github.com/reactjs/reselect
*	https://redux-saga.js.org
*	https://facebook.github.io/immutable-js/

******************************************************************************************
## 20.	__HTTP/JSON/AJAX + Asynchronous Javascript__
******************************************************************************************

*	HTTP messages: https://www.w3schools.com/tags/ref_httpmessages.asp
*	Test site: http://example.com/



******************************************************************************************
## 21.	__Backend Basics__
******************************************************************************************

******************************************************************************************
## 22. __APIs__
******************************************************************************************
*	https://stripe.com/docs/api
*	https://www.twilio.com/docs/api/messaging/send-messages
*	https://apilist.fun


******************************************************************************************
## 23.	__FINAL PROJECT: SmartBrain Front-End__


Animated objects library:
*	https://www.npmjs.com/package/react-tilt
	```
	npm install –save react-tilt
	```

Background patterns:
*	http://lea.verou.me/css3patterns/


Animated background library:
*	https://particles.matteobruni.it/

	```
	npm install react-particles-js
	```

Image and video recognition:
*	https://clarifai.com/developer/guide/
	```
	npm install clarifai
	```
Icons library:
*	https://icons8.com/icon

******************************************************************************************
## 24.	__Node.js + Express.js__

Install Postman:
*	https://www.getpostman.com/apps

Express.js:
*	https://expressjs.com/en/api.html

(Getting start guide)

```
npm install body-parser
npm install express --save
npm install --save-dev nodemon
```

Node.js Reference websites:
*	https://nodejs.org/en/
*	https://nodejs.org/api/modules.html

Storing passwords securely:
```
npm install bcrypt-nodejs
```
*	https://www.npmjs.com/package/bcrypt-nodejs
*	https://www.npmjs.com/package/argon2


```
$ npm install bcrypt
```

```jsx
1.	/*
2.	* You can copy and run the code below to play around with bcrypt
3.	* However this is for demonstration purposes only. Use these concepts
4.	* to adapt to your own project needs.
5.	*/
6.
7.	import bcrypt from'bcrypt'
8.	const saltRounds = 10 // increase this if you want more iterations
9.	const userPassword = 'supersecretpassword'
10.	const randomPassword = 'fakepassword'
11.
12.	const storeUserPassword = (password, salt) =>
13.	  bcrypt.hash(password, salt).then(storeHashInDatabase)
14.
15.	const storeHashInDatabase = (hash) => {
16.	   // Store the hash in your password DB
17.	   return hash // For now we are returning the hash for testing at the bottom
18.	}
19.
20.	// Returns true if user password is correct, returns false otherwise
21.	const checkUserPassword = (enteredPassword, storedPasswordHash) =>
22.	  bcrypt.compare(enteredPassword, storedPasswordHash)
23.
24.
25.	// This is for demonstration purposes only.
26.	storeUserPassword(userPassword, saltRounds)
27.	  .then(hash =>
28.	    // change param userPassword to randomPassword to get false
29.	    checkUserPassword(userPassword, hash)
30.	  )
31.	  .then(console.log)
32.	  .catch(console.error)
```


******************************************************************************************
## 25.	__FINAL PROJECT: SmartBrain Back-End -- Server__


Change localhost:
*	https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project

If you don't want set environment variable, other option - modify scripts part of package.json from:

```"start": "react-scripts start"```

Linux (tested on Ubuntu 14.04/16.04) and MacOS (tested by @aswin-s on MacOS Sierra 10.12.4) to:

```"start": "PORT=3006 react-scripts start"```

or (maybe) more general solution by @IsaacPak to:

```"start": "export PORT=3006 react-scripts start"```

Windows @JacobEnsor solution to:

```"start": "set PORT=3006 && react-scripts start"```


Front-end and back-end connection:
*	https://www.npmjs.com/package/cors
	```
	npm install cors
	```

Front-end:

```Javascript
fetch('http://localhost:3000/image', {
	method: 'put',
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify({
		id: this.state.user.id
	})
})
.then(response => response.json())
.then(count => {
	this.setState(Object.assign(this.state.user, { entries:count}))
})
```
Back-end:

```Javascript
const cors = require('cors')
app.use(cors());
```

******************************************************************************************
## 26.	__Databases__


Install PostgreSQL:

*	http://www.psequel.com/

	en el terminal:
	```zsh
	brew update
	brew doctor
	brew install postgresql
	brew services start postgresql
	brew services stop postgresql
	createdb ‘test’
	psql ‘test’
	```

	for windows:

*	https://www.pgadmin.org/download/pgadmin-4-windows/
*	http://www.postgresqltutorial.com/install-postgresql/

	```cmd
	@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://s3.amazonaws.com/pgcentral/install.ps1'))"

	cd bigsql
	pgc install pg10
	pgc start pg10
	```
*	http://dc-apuntes.blogspot.com/2016/04/comandos-postgres-desde-cmd-windows.html
*	https://www.w3resource.com/PostgreSQL/connect-to-postgresql-database.php
*	https://www.youtube.com/watch?v=fD7x8hd9yE4

data types
*	https://www.techonthenet.com/postgresql/datatypes.php

Terminal commands for windows:

Login: (-U usuario)

	psql -h localhost -U postgres

Create database:

	create database database_name;

Show all datatables:

	\l

Create a user:

	create user moni with password ‘moni’;

Delete a database:

	drop database database_name;

Connect to a database:

	\c database_name;

Create a schema:

	create schema friends;

Create a table:

	create table Friends.test( firstname CHAR(15), lastname CHAR(20));

	create table Friends.login(id serial not null primary key, secret varchar (100) not null, name text unique not null, entries bigint default 0, joined timestamp not null);

Show all information of a table:

	select * from friends.test;

Describe database:

	\d friends.test

Insert data:

	insert into friends.test values( ‘Mike’, ‘Smith’);

	insert into friends.test (firstname, lastname )values( ‘Sally’, ‘Jones’);

Add a column to an existing table:

	alter table Friends.test add age smallint;

Update data from the table:

	update friends.test set age = 25 where firstname= ‘Mike’;

Delete data from the table:

	delete from friends.test where firstname = ‘Mike’;

Delete column from a table:

	alter table friends.test drop column age;

Delete a table:

	drop table friends.test;

Functions:

	select avg(age) from friends.test;

Join tables:

	select * from friends.test join friends.login on friends.test.firstname = friends.login.name;

Exit:

	\q

List all users in postgresSQL database server:

	\du

List all tables in a schema:

	\d+ schema_name.*

List all tables in a database:

	\dt *.*

List a table in a schema:

	\d+ schema_name . table_name

Show description of a table, columns, type, modifications, etc.:

	\d+ table_name

Create a backup of a database:

	pg_dump -h localhost -U postgres database_name > database_name.sql

Restore a database: 1. Create a new database where the restore file is going to be placed:

	psql -U postgres -d new_database_name -f respaldo.sql

	*Note:  it is important to create the restore in the same root where the database copy is saved.

Enter to postgres with a user different to postgres:

	psql -h localhost -d postgres -U usuario

Enter to a database with a different user:

	psql -h localhost -d nombre_base -U nombre_usuario


******************************************************************************************
## 27.	__FINAL PROJECT: SmartBrain Back-End – Database__


Tool for db connection with back-end:
*	https://knexjs.org/
*	https://knexjs.org/#Installation-node
*	https://github.com/vitaly-t/pg-promise

******************************************************************************************
## 28.	__Production + Deployment__


Environmental variables:
*	http://www.dowdandassociates.com/blog/content/howto-set-an-environment-variable-in-windows-command-line-and-registry/

### PORT

On terminal:

	bash
	-->PORT-3000 node server.js

On server.js:
```JSX
	const PORT = process.env.PORT
	app.listen(PORT, ()=>{
		console.log(`app is running on port ${PORT}`);
	})
```

### DATABASE

On terminal:

	bash
	-->DATABASE_URL-123  node server.js

On server.js:

```jsx
	const DATABASE_URL = process.env. DATABASE_URL
	app.listen(3000, ()=>{
		console.log(`app is running on port ${ DATABASE_URL }`);
	})
```

### OTHER OPTION

On terminal:

	fish
	-->env DATABASE_URL-‘hello’ node server.js

Deploy apps:

Heroku:

*	https://www.heroku.com/
*	https://devcenter.heroku.com/articles/git

Not the best one:
*	https://www.hostgator.com/promo/snappy60?utm_source=google&utm_medium=brandsearch&kclickid=cfe89874-3c6a-404e-b321-fc3e56f9ec2b&gclid=CjwKCAjwsJ3ZBRBJEiwAtuvtlIkFb-qOw3HN_JpH3AAkmYwKhk_L0y0stl7J1CFRR8FRltvmvhwXPBoCATIQAvD_BwE



Commands for heroku on backend folder:
Install heroku:
```
npm install -g heroku
heroku login
heroku create
```
In the terminal there will be a URL : ” https://limitless-bastion-10041.herokuapp.com/”
```
git remote –v
git push origin master
heroku git: remote –a limitless-bastion-10041
```

Changes required in:

*	BACK END: PORT in server.js needs to be changed by an environment variable
*	FRONT END: fetch URL needs to be changed by the URL of HEROKU + “:3000”

```
git push heroku master
for checking errors:
heroku logs --tail
heroku open
```


Connect to pg database:
*	https://devcenter.heroku.com/articles/heroku-postgresql
*	https://docs.aws.amazon.com/es_es/AmazonRDS/latest/UserGuide/USER_ConnectToPostgreSQLInstance.html
*	https://msdn.microsoft.com/en-us/library/ms175043(v=sql.120).aspx#SSMSProcedure

Create a new postgres database using Heroku:

Data: Heroku postgres: create new: install heroku postgres: select the app created
```
heroku addons
heroku info
heroku pg:psql
```

******************************************************************************************
## 29.	__Where To Go From Here?__
******************************************************************************************

The Complete Junior to Senior Web Developer Roadmap (2020):
*	https://academy.zerotomastery.io/p/the-complete-junior-to-senior-web-developer-roadmap

******************************************************************************************
## 30.	__Bonus: Extra Bits (Coding Challenges + AMA)__
******************************************************************************************
******************************************************************************************
## 31.	__Extra: For Windows Users__
******************************************************************************************
******************************************************************************************
## 32.	__Bonus: Part 2 - Special Thank You Gift (Discount Coupons)__
******************************************************************************************

