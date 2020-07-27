/* eslint-disable no-console */
// import * as YUP from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email'],
    });
    return res.json(users);
  }
}

export default new UserController();
