<h1 align="center">
  <img alt="Logo" src="./assets/logo.svg" width="200px">
</h1>

<h3 align="center">
  Express Application for GoBarber project
</h3>

<p align="center">The best way to schedule your service!</p>

<br>

## 📄 About the project

This api provides everything needed to organize appointments between the barbers and customers.

Customers can choose the best time available to them.

Providers can see all their appointments, manage the times, also see if one client canceled the schedule.

To see the **web client**, click here: [GoBarber Web](https://github.com/edjust/gobarber-web)<br />
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/edjust/gobarber-mobile)

<br>

## 🚀 Technologies

Technologies that I used to develop this api

-   [Node.js](https://nodejs.org/en/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Express](https://expressjs.com/pt-br/)
-   [Multer](https://github.com/expressjs/multer)
-   [TypeORM](https://typeorm.io/#/)
-   [JWT-token](https://jwt.io/)
-   [uuid v4](https://github.com/thenativeweb/uuidv4/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [Date-fns](https://date-fns.org/)
-   [Jest](https://jestjs.io/)
-   [Eslint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [EditorConfig](https://editorconfig.org/)

### Requirements

-   [Node.js](https://nodejs.org/en/)
-   [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
-   One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use Docker

### Clone the project and access folder

```sh
$ git clone https://github.com/edjust/gobarber-back-end.git && cd gobarber-api
```

### Follow the steps below

```sh
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

<br>

## 🏃‍♂️ Run with Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=GoBarber%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fedjust%2Fgobarber-back-end%2Fmaster%2FInsomnia.json)
