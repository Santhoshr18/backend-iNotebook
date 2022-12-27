const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User')
router.post('/createuser', [
  body('name','name must be 3 characters').isLength({ min: 3 }),

    body('email','enter a unique email').isEmail(),
  body('password','atleast of 3 characters').isLength({ min: 5 })],
  async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({error:"user already registered with this email address"})
    }
    user = await User.create({
      name: req.body.name,
      email:req.body.email,
      password: req.body.password,
    })
    res.json(user)
    } 
    
    catch (error) {
        res.status(500).send("Something went wrong")
    }
  })

module.exports = router