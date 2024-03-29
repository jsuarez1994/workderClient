import { DateModel } from './baseModel/date-model';
import { Rol } from './rol';
import { Company } from './company';
import { Order } from './order';

export class User extends DateModel{

    email:string;
    password:string;
    name:string;
    surname:string;
    activated:boolean;
    pathPhoto:string;
    rol:Rol;
    position:Position;
    company:Company;
    orders:Array<Order>;

}
