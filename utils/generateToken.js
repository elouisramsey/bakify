import jwt from 'jsonwebtoken'

export const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.cookieSecret, { expiresIn: '15m' })
}

export const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.clientSecret, { expiresIn: '7d' })
}
