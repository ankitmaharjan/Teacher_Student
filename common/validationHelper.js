module.exports = {
    // User name and email Validation for  user information
    userInfo: [
      body("firstName", "The firstname must be of minimum 3 characters length")
        .optional()
        .isLength({ min: 3 })
        .trim()
        .unescape()
        .escape(),
  
        body("lastName", "The lastname must be of minimum 3 characters length")
        .optional()
        .isLength({ min: 3 })
        .trim()
        .unescape()
        .escape(),


        body("email", "Invalid email address")
      .optional()
      .trim()
      .unescape()
      .escape()
      .isEmail()
      .custom(async (value) => {
        // Checking that the email already in use or NOT
        const [row] = await execute(
          "SELECT `email` FROM `users` WHERE `email`=?",
          [value]
        );
        if (row.length > 0) {
          return Promise.reject("E-mail already in use");
        }
      }),
  ]}