# notes-app

This is a simple web application that allows you to take notes, tag and filter them.


![Screenshot  of notes-app](https://i.imgur.com/DhfSkLo.png)

## Tecnologies

This app was made using [Spring-boot 2.7.8](https://spring.io/) for the backend with [Java 11.0.17](https://www.java.com/) and [Maven 3.6.3](https://maven.apache.org/)   
It is connected to my own [mongoDB](https://www.mongodb.com/) database   
For the frontend I used [React 18.2.0](https://reactjs.org/)   

## Run the app

Try to run the bash file 

    $ ./run.sh

or **alternatively** try running each of the commands on the command line:

1.- Start the backend server

From inside the `backend` folder you can run in cmd

    $ ./mvnw spring-boot:run

This will start the backend server on http://127.0.0.1:8080

2.- Install dependencies 

From inside the `frontend` folder

    $ npm install

This will install all the dependencies for the project

3.- Launch frontend

    $ npm start

This will start the react app and open http://localhost:3000 on your browser