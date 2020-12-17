import jwt from 'jsonwebtoken'

export const generateToken = (secretKey) => {

}

export const verifyToken = (token, secretKey) => {
    return jwt.verify(token, secretKey);
}

