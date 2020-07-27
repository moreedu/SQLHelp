import { Model } from 'sequelize';

class Checkins extends Model {
  /* static init(sequelize) {
      super.init(
      {
        start_date: Sequelize.DATE, // Data de início da matrícula
        end_date: Sequelize.DATE, // Data fim do plano
        price: Sequelize.FLOAT, // Preço do plano por período.
      },
      {
        sequelize,
      }
    );

    return this;
  } */

  static associate(models) {
    // student_id e plan_id são parâmetros da migration enrollment
    this.belongsTo(models.Students, {
      foreignKey: 'student_id',
      as: 'student',
    });
  }
}

export default Checkins;
