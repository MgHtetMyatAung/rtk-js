import CryptoJS from "crypto-js";

// Secret key for encryption (this should be stored securely)
const SECRET_KEY = import.meta.env.VITE_CRYPTO_SECRET_KEY;

// Encrypt a token
export const encryptToken = (token) => {
  return CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
};

// Decrypt a token
export const decryptToken = (encryptedToken) => {
  const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
