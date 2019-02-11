import Swal from 'sweetalert2';

export class Alert{

    static msgErrorLogin(title:string, description:string){
        Swal.fire({
            position: 'top-end',
            type: 'error',
            title: title,
            text: description,
            showConfirmButton: true
        })
    }

    static msgSuccessLogin(title:string) {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: title,
            showConfirmButton: true
        })
    }

}