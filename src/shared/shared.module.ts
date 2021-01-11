import { Module } from "@nestjs/common";
import { MapperService } from "../shared/mapper.service";

@Module({
  imports : [ MapperService ],
  exports : [ MapperService ]
})
export class SharedModule {}
