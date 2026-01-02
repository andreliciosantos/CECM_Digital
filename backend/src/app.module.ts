import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { ClassesModule } from './classes/classes.module';
import { ProfessorsModule } from './professors/professors.module';
import { ManagementModule } from './management/management.module';

@Module({
  imports: [AuthModule, StudentsModule, ClassesModule, ProfessorsModule, ManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
