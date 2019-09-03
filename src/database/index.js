import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import databaseconfig from '../config/database';

const models = [User, File];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseconfig);
    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
