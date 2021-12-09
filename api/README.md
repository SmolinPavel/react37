### CRUD

Examples of Create Read Update Delete operations

1. Install dependencies `yarn` or `npm i`
2. Start the server on port 3001 `yarn start` or `npm start`

### Endpoints

- _POST_ `http://localhost:3000/user/add` - creates a user. Make sure you add a
  request body.
- _GET_ `http://localhost:3000/user/list` - lists all the users. Returns an
  array of existing users.
- _PUT_ `http://localhost:3000/user/update/:username` - update the user by
  username.
- _DELETE_ `http://localhost:3000/user/delete/:username` - deletes the user by
  username.
