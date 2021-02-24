import dbConnect from '../../../utils/dbConnect'
import Customer from '../../../models/userModel'
import bcrypt from 'bcrypt'
import {
  createAccessToken,
  createRefreshToken
} from '../../../utils/generateToken'

dbConnect()

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await login(req, res)
      break
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await Customer.findOne({ email })
    if (!user) return res.status(400).json({ err: 'User does not exist yet.' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ err: 'Password Incorrect' })

    const accessToken = createAccessToken({ id: user._id })
    const refreshToken = createRefreshToken({ id: user._id })

    res.json({
      success: 'Welcome Back!',
      accessToken,
      refreshToken,
      user: {
        name: user.name,
        email: user.email
      }
    })
  } catch (err) {
    return res.status(500).json({
      err: 'There was an error logging you in, please hold on.'
    })
  }
}
