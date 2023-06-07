import crypto from "crypto";

export function encrypt(text:string): string {
  const cipher = crypto.createCipher("aes-256-cbc", key);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

export function decrypt(encrypted: string): string {
  try {
    const decipher = crypto.createDecipher("aes-256-cbc", key);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (error) {
    console.error("Error decrypting data:", error);
    return "";
  }
}


const key="12345678901234567890123456789012";