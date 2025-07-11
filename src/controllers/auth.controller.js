import { authService } from "../services/auth.service.js";

export const register = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await authService.register(data);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, mat_khau } = req.body;
    const result = await authService.login(email, mat_khau);
    res.json(result);
  } catch (err) {
    next(err);
  }
};