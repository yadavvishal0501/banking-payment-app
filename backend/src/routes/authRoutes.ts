import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Dummy login logic
  if (email === "test@gmail.com" && password === "123456") {
    return res.json({ message: "Login Successful" });
  }

  return res.status(401).json({ message: "Invalid Credentials" });
});

export default router;
