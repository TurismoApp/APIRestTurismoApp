import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IN_CHARGE } from './data/inCharge';
import { inCharge } from './models/inCharge.entity';
import { getRepository, getConnection } from 'typeorm';
import { activity } from './models/activity.entity';
import { ACTIVITY } from './data/activity';
import { ubications } from './models/ubications.entity';
import { UBICATIONS } from './data/ubications';
import { schedules } from './models/schedules.entity';
import { SCHEDULES } from './data/schedules';
import { images } from './models/images.entity';
import { IMAGES } from './data/images';
import { Establishment } from './models/Establishment.entity';
import { ESTABLISHMENT } from './data/establishment';
import { place } from './models/place.entity';
import { PLACE } from './data/place';

/* 
  CREAR BASE DE DATOS EN PHPMYADMIN CON NOMBRE: yucappdb
  como gestor de basedatos preferiblemente use PHPMYADMIN con XAMPP
{     
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'YucappDB',
}
  si tiene otra configuraciones que puedan alterar el funcionamiento normal de la base de datos
  modificar el archivo que se encuentra en esta ruta
  -->  src\database\database.providers.ts
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await getRepository(inCharge).save(IN_CHARGE);
  await getRepository(activity).save(ACTIVITY);
  await getRepository(ubications).save(UBICATIONS);
  await getRepository(Establishment).save(ESTABLISHMENT);
  await getRepository(place).save(PLACE);
  await getRepository(images).save(IMAGES);
  await getRepository(schedules).save(SCHEDULES);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
