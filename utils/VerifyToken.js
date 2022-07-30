import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.cookie;
  if (!token) {
    res.status(401).send("Unauthorized");
    return;
  }
  jwt.verify(token, process.env.JWTSECRETKEY, (err) => {
    if (err) {
      res.status(401).send("Invalid Token or Token expired");
    } else {
      next();
    }
  });
};

export default verifyToken;
