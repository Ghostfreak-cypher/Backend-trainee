import mongoose from "mongoose";

const { Schema } = mongoose;

const loginSignUpSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});
const loginSignUp = mongoose.model("loginSignUp", loginSignUpSchema);
export default loginSignUp;

// Sample Data
//----------------------------------------------------------------------
// {
    // "firstName": "John",
    // "lastName": "Doe",
    // "username": "johndoe123",
    // "email": "johndoe@example.com",
    // "mobileNumber": 1234567890,
    // "password": "Password123!",
    // "confirmPassword": "Password123!"
//   },
//----------------------------------------------------------------------
//  {
//     "firstName": "Jane",
//     "lastName": "Smith",
//     "username": "janesmith456",
//     "email": "janesmith@example.com",
//     "mobileNumber": 9876543210,
//     "password": "SecurePass456$",
//     "confirmPassword": "SecurePass456$"
//   },
//----------------------------------------------------------------------
// {
//     "firstName": "Alice",
//     "lastName": "Johnson",
//     "username": "alicejohnson789",
//     "email": "alicejohnson@example.com",
//     "mobileNumber": 1122334455,
//     "password": "AlicePassword789#",
//     "confirmPassword": "AlicePassword789#"
//   },
//----------------------------------------------------------------------
