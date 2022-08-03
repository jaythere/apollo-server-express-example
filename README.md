## How to run

`npm install` to install all the packages

`npm start` to run it

if you don't have `nodemon` then install it globally `npm install nodemon -g`

## localhost URL

http://localhost:3001/graphql

## Mutations

```
mutation CreateUser($name: String!, $age: Int!) {
  createUser(name: $name, age: $age) {
  	name
  }
}
```

## Query

```
query {
  getAllUsers {
    name,
    age
  }
}
```
