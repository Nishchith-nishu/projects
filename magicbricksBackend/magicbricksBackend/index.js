
require('dotenv').config()
const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

const db=require('./configure/database')
const User=require('./model/user');
const MbsUsers = require('./model/user');
const Cart=require('./model/carts')
const authenticateToken=require('./middleware/author')
const app = express();
const port = 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

 
db.connect()
const JWT_SECRET =  process.env.JWT_SECRET
if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined.");

}


app.post('/register', async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    const newUser = new User({ userName, userEmail, userPassword: hashedPassword });
    await newUser.save();

    
    const token = jwt.sign(
      { id: newUser._id, email: newUser.userEmail },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    //
    res.status(201).json({ message: "User registered successfully", token: token });
  } catch (error) {
    console.log(error); 
    res.status(400).json({ error: error.message });
  }
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await MbsUsers.findOne({ userEmail: email });
    if (!user) {
      return res.status(404).json("User not found");
    }

    
    const isMatch = await bcrypt.compare(password, user.userPassword);
    if (isMatch) {
      // Create a token
      const token = jwt.sign(
        { id: user._id, email: user.userEmail },  
        JWT_SECRET,
        { expiresIn: '4d' }  
      );
    
      res.json({ message: "Login successful",token:token,
      userName: user.userName ,
      userEmail:user.userEmail,
      userNumber:user.userNumber,
      id:user._id});
    } else {
      res.status(401).json("Password is incorrect");
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json("Internal Server Error");
  }
});
app.post('/api/cart', async (req, res) => {
  const { userId, items } = req.body;

  try {
      let cart = await Cart.findOne({ userId });
      if (!cart) {
          cart = new Cart({ userId, items });
      } else {

          cart.items.push(...items);
      }
      await cart.save();
      res.status(200).json(cart);
      const result = processCartData(req.body); 
    if (result.error) {
        return res.status(500).json({ message: "Error processing request", error: result.error });
    }
    res.status(200).json({ message: "Data processed successfully", data: result });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/protected-route', authenticateToken, (req, res) => {
  res.json({ message: `Welcome, your email is ${req.user.email}` });
});

 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
