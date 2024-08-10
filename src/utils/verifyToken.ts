import { jwtDecode } from "jwt-decode";
const verifyToken = async (token: string) => {
  const decode = await jwtDecode(token);
  return decode;
};

export default verifyToken;