import Swal from 'sweetalert2';

export class Alert{

    /**
     * MSG: Message Error when login failed
     * 
     * @param title:string
     * @param description:string
    */
    static msgErrorLogin(title:string, description:string){
        Swal.fire({
            position: 'top-end',
            type: 'error',
            title: title,
            text: description,
            showConfirmButton: true
        })
    }

    /**
     * MSG: Message Success when login success
     * 
     * @param title:string
    */
    static msgSuccessLogin(title:string) {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: title,
            showConfirmButton: true
        })
    }

}