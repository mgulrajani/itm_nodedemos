export function validatePassword(req, res, next) {
    const { password } = req.body;
    const strongRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  
    if (!strongRegex.test(password)) {
      return res.status(400).json({
        message: "Password must be at least 8 chars,include upper, lower, and a number"
      });
    }
    next();
  }
  