import { NameDescriptionModel } from './baseModel/name-description-model';
import { Company } from './company';

export class Sector extends NameDescriptionModel{

    companys:Array<Company>;

}
