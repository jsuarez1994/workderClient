import { Sector } from './sector';
import { User } from './user';
import { BaseTotalModel } from './baseModel/base-total-model';

export class Company extends BaseTotalModel{

    web:string;
    address:string;
    sector:Sector;
    listUsers:Array<User>;

}
