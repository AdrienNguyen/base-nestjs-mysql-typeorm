import jwt from 'jsonwebtoken';

export const generateAccessJWT = (data, options = {}) => {
  const key = process.env.ACCESS_JWT_SECRET_KEY;
  return jwt.sign(data, key, options);
};

export const verifyAccessJWT = async (token, options = {}) => {
  const key = process.env.ACCESS_JWT_SECRET_KEY;
  return await jwt.verify(token, key, options);
};

export const generateRefreshJWT = (data, options = {}) => {
  const key = process.env.REFRESH_JWT_SECRET_KEY;
  return jwt.sign(data, key, options);
};

export const verifyRefreshJWT = async (token, options = {}) => {
  const key = process.env.REFRESH_JWT_SECRET_KEY;
  return await jwt.verify(token, key, options);
};
