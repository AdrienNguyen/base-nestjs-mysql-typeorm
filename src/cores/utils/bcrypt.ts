import * as bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword: string): Promise<string> => {
  return await bcrypt.hash(plainPassword + process.env.PASSWORD_SECRET_KEY, 10);
};

export const comparePassword = async (
  plainPassword,
  encryptedPassword,
): Promise<boolean> => {
  return await bcrypt.compare(
    plainPassword + process.env.PASSWORD_SECRET_KEY,
    encryptedPassword,
  );
};
