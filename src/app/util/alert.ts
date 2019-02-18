import Swal from 'sweetalert2';
import { Constants } from '../util/constants';

export class Alert{

    /**
     * MSG: Message Error when login failed
    */
    static msgErrorLogin(){
        Swal.fire({
            position: 'top-end',
            type: 'error',
            title: Constants.MSG_ERROR_TITLE_LOGIN, 
            text: Constants.MSG_ERROR_DESCRIPTION_LOGIN,
            showConfirmButton: true
        })
    }

    /**
     * MSG: Message Success when login success
    */
    static msgSuccessLogin() {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: Constants.MSG_SUCCESS_TITLE_LOGIN,
            showConfirmButton: true
        })
    }

    /**
     * MSG: Message user inactivated when login success
    */
   static msgUserInactivated() {
    Swal.fire({
        position: 'top-end',
        type: 'error',
        title: Constants.MSG_ERROR_USER_INACTIVATED,
        showConfirmButton: true
    })
}

}