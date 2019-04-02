# Flckr Photo Stream

Flickr Photo Stream is a web application for consuming the Flickr API.
It also supports the creation, update, deletion and visualization of users.

## Preview
![preview_img_2](http://i67.tinypic.com/20unxif.png)

![preview_img_2](http://i63.tinypic.com/ifmyxh.png)

![preview_img_2](http://i68.tinypic.com/se6694.png)

![preview_img_2](http://i66.tinypic.com/9vgivm.png)

## How to get it running

### 1. Clone or download the repository.

### 2. Run MongoDB 
- Should listen on port 27017

### 3. Run the server
- Navigate to './server'

- Run the following commands:

```sh
    nvm use
    npm install
    npm start
``` 

### 3. Run the client
- Navigate to './client'

- Run the following commands:

```sh
    nvm use
    npm install
    npm start
``` 

## Server API description
- Get all users

```sh
    GET api/users
```

- Get user by ID

```sh
    GET api/users/{userId}
```

- Create user

```sh
    POST /api/users
    Headers: { Content-Type: 'application/json'}
    Body:
    {
        "email": "string"
        "givenName": "string",
        "familyName": "string"
    }
```

- Update user

```sh
    PUT /api/users/{userId}
    Headers: { Content-Type: 'application/json'}
    Body:
    {
        "givenName": "string",
        "familyName": "string",
    }
```

- Delete user

```sh
    DELETE /api/users/{userId}
```

### Tests
- To run the integreation tests of the API navigate to server foloder and run the following command:

```sh
    npm test
```

### Technology stack
```sh
    MongoDb, Mongoose, NodeJS, ExpressJS, React, Redux, RxJs,
    ramda, Mocha, Chai
 ```
