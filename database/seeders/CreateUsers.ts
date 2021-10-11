import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import User from 'App/Models/User';

export default class CreatetUsersSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'matheus@gmail.com',
        password: 'matheus',
        role: 'admin'
      },
      {
        email: 'normal@gmail.com',
        password: 'matheus',
        role: 'normal'
      },
    ]);
  }
}
