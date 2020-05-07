import { Connection } from "typeorm";
import { activity } from "src/models/activity.entity";
import { images } from "src/models/images.entity";
import { inCharge } from "src/models/inCharge.entity";
import { ubications } from "src/models/ubications.entity";
import { schedules } from "src/models/schedules.entity";



export const activityProviders = [
    {
      provide: 'ACTIVITY_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(activity),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const imagesProviders = [
    {
      provide: 'IMAGES_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(images),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const inChargeProviders = [
    {
      provide: 'INCHARGE_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(inCharge),
      inject: ['DATABASE_CONNECTION'],
    },
];

export const ubicationsProviders = [
  {
    provide: 'UBICATIONS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ubications),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const schedulesProviders = [
    {
      provide: 'SCHEDULES_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(schedules),
      inject: ['DATABASE_CONNECTION'],
    },
];