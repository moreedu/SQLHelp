import Sequelize from 'sequelize';

import User from '../app/models/User';
// import File from '../app/models/File';
// import Appointment from '../app/models/Appointment';

// chamar os dados de configuração do banco de dados da pasta config.
import databaseConfig from '../config/database';

const models = [User]; // Array onde insiro todos os models existentes

class Database {
  constructor() {
    this.init(); // Chamando método init.
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    // .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database(); // chamo ele no arquivo app da raíz..
