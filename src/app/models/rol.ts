import { NameDescriptionModel } from './baseModel/name-description-model';
import { User } from './user';

export class Rol extends NameDescriptionModel{

    user:Array<User>;

}
