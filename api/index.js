const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();

// this line is required to parse the request body
app.use(express.json());
app.use(cors());

/* Create - POST method */
app.post('/user/add', (req, res) => {
  const existUsers = getUserData();

  const userData = req.body;

  existUsers.push(userData);

  saveUserData(existUsers);

  res.send({
    success: true,
    msg: `${userData.name} ${userData.surname} data added successfully`,
  });
});

/* Read - GET method */
app.get('/user/list', (req, res) => {
  const users = getUserData();

  setTimeout(() => {
    res.send(users);
  }, 2000);
});

/* Update - Put method */
app.put('/user/update/:username', (req, res) => {
  const username = req.params.username;
  const userData = req.body;

  const existUsers = getUserData();

  const updatedUsers = existUsers.map(user => {
    if (username === user.username) {
      return userData;
    }

    return user;
  });

  saveUserData(updatedUsers);

  res.send({
    success: true,
    msg: `${userData.fullname} data updated successfully`,
  });
});

/* Delete - Delete method */
app.delete('/user/delete/:username', (req, res) => {
  const username = req.params.username;

  const existUsers = getUserData();
  const filteredUsers = existUsers.filter(user => user.username !== username);

  saveUserData(filteredUsers);

  res.send({ success: true, msg: `${username} removed successfully` });
});
/* util functions */

//read the user data from json file
const saveUserData = data => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('users.json', stringifyData);
};

// //get the user data from json file
const getUserData = () => {
  const jsonData = fs.readFileSync('users.json');
  return JSON.parse(jsonData);
};

/* util functions ends */

//configure the server port
app.listen(3001, () => {
  console.log('Server runs on port 3001');
});
