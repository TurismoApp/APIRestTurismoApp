import { createConnection } from 'typeorm';
import { FirebaseAdminCoreModule } from '@tfarras/nestjs-firebase-admin/dist/index';
import admin = require('firebase-admin');
const credentials = require('./firebaseadminsdk.json');

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'mysql5019.site4now.net',
      port: 3306,
      username: '9f3d39_yucapp',
      password: 'Yuc4App.2020',
      database: 'db_9f3d39_yucapp',
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