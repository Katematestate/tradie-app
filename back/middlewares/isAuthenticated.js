const isAuthenticated = (userType) => {
  return (req, res, next) => {
    if (!req.session || !req.session.loggedIn || req.session.userType !== userType) {
      return res.redirect('/auth/loginUserOrBusiness');
    }
    next();
  };
};


module.exports = isAuthenticated;