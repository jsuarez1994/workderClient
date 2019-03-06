export class Utilities{

      //Return actually date
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

            return mm + '/' + dd + '/' + yyyy;
      }

}