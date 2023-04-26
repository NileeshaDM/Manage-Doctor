const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: String, required: false, },

    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    isCoach: { type: Boolean, default: false, required: true },
    isDoctor: { type: Boolean, default: false, required: true },
    isCustomer:{ type: Boolean, default: false, required: true},
    
    phone:{
      type: String,
      required: [false, 'phone is required'],
  },
  photo : {
      type: String,
      required : false,
  },
  specialization : {
      type: String,
      required : false,
  },
  designation : {
      type: String,
      required : false,
  },
  description : {
      type: String,
      required : false,
  },
  experience : {
      type: String,
      required : false,
  },
  timings : {
      type: Array,
      required : false,
  },
    
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model('user' , userSchema)
