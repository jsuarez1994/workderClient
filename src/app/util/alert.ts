import Swal, { SweetAlertType } from 'sweetalert2';
import { Constants } from '../util/constants';
import { User } from '../models/user';

export class Alert {

    /**
     * MSG: Message Error cuando login falla
    */
    static msgErrorLogin() {
        Swal.fire({
            position: 'top-end',
            type: 'error',
            title: Constants.MSG_ERROR_TITLE_LOGIN,
            text: Constants.MSG_ERROR_DESCRIPTION_LOGIN,
            showConfirmButton: true
        })
    }

    /**
     * MSG: Message Success cuando logea con exito
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
    /**
     * MSG: Alert when change property Complete of Order
     */
    static msgPropertyCompleteChange(title: string) {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: Constants.ALERT_ORDER_INIT + title + Constants.ALERT_ORDER_FINISH,
            showConfirmButton: false,
            timer: 1500
        })

    }

    /**
     * MSG: Alert cuando cambia propiedad Complete de una Orden
     */
    static msgPropertyErrorChange(title: string) {
        Swal.fire({
            position: 'top-end',
            type: 'error',
            title: Constants.ALERT_ORDER_INIT + title + Constants.ALERT_ORDER_FINISH,
            showConfirmButton: false,
            timer: 1500
        })
    }

    /**
     * Mensaje generico
     * @param   title:  Titulo del modal
     * @param   text:   Texto que se mostrara en el modal
     * @param   type:   Tipo de logo que saldra
    */
    static msgGeneric(title: string, text: string, type: SweetAlertType) {
        Swal.fire({
            type: type,
            title: title,
            text: text
        })
    }

}