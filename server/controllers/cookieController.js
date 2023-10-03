// Controller for handling cookie operations.
const cookieController = {
  /**
   * Set the user ID in an 'ssid' cookie.
   * @param req - Express Request object
   * @param res - Express Response object
   * @param next - Next middleware function
   */
  setSSIDCookie: (_req, res, next) => {
    const { userId } = res.locals;
    // Set the 'ssid' cookie for 12 hours
    console.log('inside cookie middleware');
    res.cookie('SSID', userId, {
      maxAge: 12 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    console.log(res.cookie);
    return next();
  },
};

module.exports = cookieController; //
