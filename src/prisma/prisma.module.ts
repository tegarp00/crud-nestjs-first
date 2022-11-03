import { Module } from '@nestjs/common';
//import { ServiceModule } from './service/service.module';
import { PrismaService } from './prisma.service';

@Module({
  //imports: [ServiceModule],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
