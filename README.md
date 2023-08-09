# 🧑‍💻 Simple Web app by Toni using expressjs + ejs

A simple web app demonstrates users management, created with ExpressJs and EJS view template

<h3>Backend</h3>
<p align=”center”>
<img width="88" height="28" alt="NodeJs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img width="88" height="28" alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img width="88" height="28" alt="ExpressJs" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
</p>

<h3>Database</h3>
<img width="88" height="28" alt="Mysql" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />

<h3>View engine</h3>

📛 https://www.npmjs.com/package/ejs 📛

<h3>Stylying</h3>

<img width="88" height="28" alt="Css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />

## Some features of source code are as follows 👋

- Show list/edit/create/delete user(s)
- Upload single/multi files (images only) using multer

## Install

Clone the repo using

<pre>
<code>git clone https://github.com/tonidevvn/express-ejs-basic</code>
</pre>

Install all the required dependencies using

<pre>
<code>npm install</code>
</pre>

## Launch the App

In the project directory, you can run:

<pre>
<code>npm start</code>
</pre>

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

## APIs to inquire data from Mysql database

🚀 To create a new user - POST METHOD

‼️ Req body must include [firstName, lastName, email, address]

<pre>
<code>http://localhost:8080/api/v1/create-user</code>
</pre>

🚀 To get all users - GET METHOD

<pre>
<code>http://localhost:8080/api/v1/users</code>
</pre>

🚀 To get an user by id - GET METHOD

<pre>
<code>http://localhost:8080/api/v1/users/:uid</code>
</pre>

🚀 To update an user - PUT METHOD

‼️ Req body must include [uid, firstName, lastName, email, address]

<pre>
<code>http://localhost:8080/api/v1/update-user</code>
</pre>

🚀 To delete an user by id - GET METHOD

<pre>
<code>http://localhost:8080/api/v1/delete-user/:uid</code>
</pre>

## 🪄 Screenshots

![Screenshot-1](/src/public/image/app_Screenshot_1.jpg?raw=true "Screenshot-1")

![Screenshot-2](/src/public/image/app_Screenshot_2.jpg?raw=true "Screenshot-2")

![Screenshot-3](/src/public/image/app_Screenshot_3.jpg?raw=true "Screenshot-3")

## I'm Toni 👋

I'm a Web Developer 💻, Photographer 📸!

Thank you so much for reading my Github 😎.
