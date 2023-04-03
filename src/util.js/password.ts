import * as bcrypt from "bcryptjs";
/**
 * Following method contains source code for password encryption with the bcrypt. This is used for security purpose
 */
export const encodePassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

/**
 * Following method contains source code for validate password at the time of user Login
 * Validating password crypto module
 */
export const isPasswordCorrect = async (
  savedHash: any,
  passwordAttempt: string
): Promise<boolean> => {
  return bcrypt.compareSync(passwordAttempt, savedHash);
};