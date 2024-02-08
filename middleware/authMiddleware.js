const protect = (req, res, next) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({ status: "fail", message: "unauthorized" });
  }
  req.user = user;
  // it is going to send it to controller or to next middleware
  next();
};

module.exports = protect;
