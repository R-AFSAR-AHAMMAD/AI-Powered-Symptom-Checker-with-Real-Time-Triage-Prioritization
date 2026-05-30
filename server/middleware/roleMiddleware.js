const roleMiddlware = (...roles) => {
  return (request, response, next) => {
    if (!roles.includes(request.user.role)) {
      return response.status(403).json({ error: "Access Denied" });
    }
    next();
  };
};
module.exports = roleMiddlware;
