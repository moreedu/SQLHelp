import Sequelize, { Model } from 'sequelize';

class Help extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        area: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Help;
