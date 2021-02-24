import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
      minlength: 2,
      trim: true
    },
    address: {
      type: String,
      required: [true, 'Please enter an address'],
      unique: true,
      minlength: 7,
      trim: true
    },
    phone: {
      type: Number,
      required: [true, 'Please enter a phone number'],
      unique: true,
      minlength: 10,
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      trim: true,
      unique: true,
      lowercase: true,
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: 'Invalid Email address' })
        }
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err)
    this.password = passwordHash
    next()
  })
})

export default mongoose.models.Customer ||
  mongoose.model('Customer', userSchema)
