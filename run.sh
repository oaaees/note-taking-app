#!/bin/sh
/bin/sh -ec 'cd backend && ./mvnw spring-boot:run &'
/bin/sh -ec 'cd frontend && npm install'
/bin/sh -ec 'cd frontend && npm start'
