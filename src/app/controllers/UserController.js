import User from '../models/User';

class UserController {
  async store(req, res) {
    const { chave, name, email } = await User.create(req.body);

    return res.json({ chave, name, email });
  }

  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'chave', 'name', 'email'],
    });
    return res.json(users);
  }
}

export default new UserController();
