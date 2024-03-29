import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto{
    @IsString()
    @IsNotEmpty()
    readonly name:string;
    
    @IsString()
    readonly description:string;
    
    @IsNotEmpty()
    readonly authors:number[];
}