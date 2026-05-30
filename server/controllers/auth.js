const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const signup = async (request, response) => {
  try {
    const { name, email, password, role } = request.body;

    if (!name || !email || !password || !role) {
      return response.status(400).json({
        error: "Please fill all fields",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      name,
      password: hashedPassword,
      email,
      role,
    });

    await newUser.save();

    return response.status(201).json({ message: "User created successfully" });
  } catch (e) {
    response.status(500).json({ error: e.message });
  }
};


const login = async (request, response) => {
  const { email, password } = request.body;
  try {
    if (!email || !password) {
      return response
        .status(400)
        .json({ error: "please fill the details" });
    }

    const user = User.findOne({email});

    if (!user){
      return response.status(401).json({error:"Invalid credentials"})
    }

    const isPasswordMatching = await bcryptjs.compare(password,user.password);

    if (!isPasswordMatching){
    }

    const token = jwt.sign({
      id:user._id,
      role:user.role
    },process.env.JWT_SECRET,{expiresIn:"30d"})

    response.status(200).json({message:"Login Successfull",token,role:user.role});

  } catch (e) {
    response.status(500).json({ error: e.message });
  }
};

const getStaff = async (request, response) => {
  try {
    const staff = await User.find();
    response.json(staff);
  } catch (e) {
    response.status(500).json({ error: e.message });
  }
};
module.exports = { signup, getStaff };
