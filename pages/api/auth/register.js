import dbConnect from '../../../utils/dbConnect'
import Customer from '../../../models/userModel'

dbConnect()

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res)
      break
  }
}

const register = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      password,
      passwordConfirmation
    } = req.body

    const user = await Customer.findOne({ email })
    if (user) return res.status(400).json({ err: 'This email already exists.' })

    const newUser = new Customer({
      name,
      email,
      phone,
      address,
      password,
      passwordConfirmation
    })
    await newUser.save()
    res.json({ success: 'Welcome Aboard!' })
    console.log(newUser)
  } catch (err) {
    return res.status(500).json({ err: 'There was an error, please hold on.' })
  }
}
