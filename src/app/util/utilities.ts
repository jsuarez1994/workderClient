import { Constants } from './constants';

export class Utilities{

      //Retorna dia actual
      static getCurrentDate():string{
            let today = new Date();
            let dd:any = today.getDate();
            let mm:any = today.getMonth() + 1; //January is 0!
            let yyyy:any = today.getFullYear();

            if (dd < 10) {
                  dd = '0' + dd;
            }

            if (mm < 10) {
                  mm = '0' + mm;
            }

            return mm + Constants.SPLIT_URL + dd + Constants.SPLIT_URL + yyyy;
      }

      //Agrega un dia al dia pasado
      static addOneDay(dateF:string):string{
            //Variable de salida
            let date:string;

            //Separamos la fecha por el limitador guion
            let cad:any[] = dateF.split(Constants.SPLIT_DATE);
            //Obtenemos mes
            let month:any = +cad[cad.length-2];
            //Obtenemos el dia
            let day:any = +cad[cad.length-1];
            //Obtenemos el anio
            let year:any = +cad[cad.length-3];

            //Realizamos la validacion pertinentes
            //Validacion mes febrero
            if (day == 28 && month == 2) {
                  if( this.yearLeap(year) ) {
                        day++;
                  } else {
                        month++;
                        day = 1;
                  }
            //Validacion meses con 30 dias
            } else if ( day==30 && (month == 4 || month == 6 || month == 9 || month == 11) ){ 
                  month++;
                  day = 1;
            //Validacion meses con 31 dias
            } else if ( day==31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) ) {
                  if( month == 12 ){
                        year++;
                        month = 1;
                        day = 1;
                  } else {
                        month++;
                        day = 1;
                  }
            } else {
                  day++;
            }


            //Le damos formato
            if (day < 10) {
                  day = '0' + day;
            }
            if (month < 10) {
                  month = '0' + month;
            }

            date = year + Constants.SPLIT_DATE + month + Constants.SPLIT_DATE + day;

            return date;
      }

      //Comprobamos si el anio es bisiesto
      static yearLeap(year:number):boolean {
            let out:boolean = false;

            if((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))){
                  out = true;
            }

            return out;
      }

      //Esconder Spinner
      static stopSpinner():string {
            return "hidden-element";
      }

      //Mostrar Spinner
      static showSpinner():string{
            return Constants.STRING_EMPTY;
      }

}