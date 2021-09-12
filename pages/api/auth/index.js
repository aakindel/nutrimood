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

export default function handler(req, res) {
  
  const {method} = req
  
  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'John Doe' })
      break
    case 'POST':
      // Update or create data in your database
      res.status(201).json({...req.body, id: uuidv4()})
      // authenticateUser(req.body.name, req.body.pass, etc.)
      break
    default:
      res.status(404).json({ message: `404` })
  }
}
