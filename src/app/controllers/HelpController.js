import User from '../models/User';
import Helps from '../models/Help';

class HelpController {
  async store(req, res) {
    const { user_id } = req.params;
    const { title, area, description } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not find' });
    }

    const helps = await Helps.create({
      title,
      area,
      description,
      user_id,
    });

    return res.json(helps);
  }
}
export default new HelpController();
