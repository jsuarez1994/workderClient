import { DateModel } from './baseModel/date-model';
import { User } from './user';

export class Order extends DateModel{

    title:string;
    description:string;
    dateInit:string;
    dateFinish:string;
    complete:boolean;
    user:User;

}
