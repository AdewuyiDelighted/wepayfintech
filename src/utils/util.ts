import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const saltRounds = 10;

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, saltRounds);
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};


const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (payload: string,): string => {
  return jwt.sign({payload}, JWT_SECRET, {
    expiresIn: 900,
  });
};


export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};