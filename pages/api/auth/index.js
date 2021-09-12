const {User} = require('../../../models/user');
import { NextApiRequest, NextApiResponse } from "next";

async function validateUniqueUsername(username) {
  let errorMsg = null;
  const usernameInDb = await User.getUserByUsername(username);

  if (usernameInDb.length != 0) {
    console.log(usernameInDb)
    errorMsg = "Username already used"
    return errorMsg;
  }

}

export default async function handler(req, res) {
  
  const {method} = req
  
  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'John Doe' })
      break
    case 'POST':
      //const {username, first_name, last_name, password} = req.body;
      
      const username = req.body.username
      const password = req.body.password

      let userArray;
      console.log(username, "*******************")

      /* Todo: create a new user */
      userArray = await User.getUserByUsername(username);
      (userArray.length > 0) 
        ? res.status(201).json({ user: JSON.parse(userArray)[0]}) 
        : res.status(404).json({ errorMsg: `user not found`})
      
      break
    default:
      res.status(404).json({ message: `404` })
  }
}
