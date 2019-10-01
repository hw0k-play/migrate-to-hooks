export const makeUniqueID = (length) => {
  let result = "";
  const chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890~!@#-_";
  const charsLength = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }

  return result;
};
