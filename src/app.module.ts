import { Module } from '@nestjs/common';
import { SupabaseModule } from './supabase/supabase.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que ConfigModule esté disponible globalmente en toda la aplicación.
      envFilePath: '.env', // Especifica el archivo de variables de entorno.
      expandVariables: true // Permite la expansión de variables dentro del archivo .env
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI') // Utiliza una variable de entorno para la URI
      }),
      inject: [ConfigService]
    }),
    SupabaseModule,
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
