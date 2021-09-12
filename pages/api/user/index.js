import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from 'uuid';
import User from "../../../models/user";

export default function handler(req, res) {
  
  const {method} = req;
  
  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'John Doe' })
      break
    case 'POST':
      // Update or create data in your database
      const newUser = {...req.body, id: uuidv4()};
      User.createNewUser(newUser); // error handling needed
      res.status(201).json(newUser);
      break
    default:
      res.status(404).json({ message: `404` })
  }
}
