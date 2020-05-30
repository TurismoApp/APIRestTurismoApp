import { createConnection } from 'typeorm';
import { FirebaseAdminCoreModule } from '@tfarras/nestjs-firebase-admin/dist/index';
import admin = require('firebase-admin');
const credentials = require('./firebaseadminsdk.json');

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'YucappDB',
      entities: [
        'dist/models/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];

export const firebaseApp = FirebaseAdminCoreModule.forRootAsync({
  useFactory: () => ({
    credential: admin.credential.cert(credentials),
    databaseURL: "https://yucappmusic.firebaseio.com"
  })
});