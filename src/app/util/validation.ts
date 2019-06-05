import { Constants } from './constants';
import { Mail } from '../models/mail';

export class Validation{

      //Valida si el email tiene todos los datos necesarios.
      static validateEmail(email:Mail):boolean{
            return email.fromEmail.trim() !== "" && email.password.trim() !== ""
                  && email.text.trim() !== "" && email.title.trim() !== "" && email.toEmail.length != 0;
      }

      
}