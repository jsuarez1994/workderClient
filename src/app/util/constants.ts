import { SweetAlertType } from 'sweetalert2';

export class Constants {

    /* -------------------- URL --------------------*/
    public static URL_API:string              =     "http://localhost:8080/workder_api/";
    public static URL_WORKER_INDEX:string     =     "worker";
    public static URL_MANAGER_INDEX:string    =     "manager";
    public static URL_BOSS_INDEX:string       =     "boss";



    /* -------------------- UTIL -------------------- */
    public static STRING_EMPTY:string           =   "";
    public static SPLIT_URL:string              =   "/";
    public static SPLIT_DATE:string             =   "-";

    public static COLOR_RED_BUTTON:string           =   "#e80000";
    public static COLOR_GREEN_BUTTON:string         =   "#009c3e";

    public static DEFAULT_IMAGE_PROFILE_NAVBAR  =   "../../assets/images/user.png";
    public static IMAGE_DELETE  =   "../../assets/images/delete.png";
    public static IMAGE_EDIT  =   "../../assets/images/edit.png";
    public static IMAGE_SEND  =   "../../assets/images/send.png";
    /* -------------------- MODELS -------------------- */

    //-----------------ROL-----------------

    //ATRIBUTES
    public static ID_ROL_ADMIN:number           =   1;
    public static ID_ROL_USER_BOSS:number       =   2;
    public static ID_ROL_USER_MANAGER:number    =   3;
    public static ID_ROL_USER_WORKER:number     =   4;
    
    //SERVICES
    public static GET_ALL_ROLS:string           =   "rols";
    public static GET_ROL:string                =   "rol";


    //-----------------SECTOR-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_SECTORS:string        =   "sectors";
    public static GET_SECTOR:string             =   "sector";

    //-----------------POSITION-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_POSITIONS:string      =   "positions";
    public static GET_POSITION:string           =   "position";

    //-----------------USER-----------------

    //ATRIBUTES
    public static ACTIVE_TRUE:string            =   "active";

    //SERVICES
    public static GET_ALL_USERS:string          =   "users";
    public static GET_USER:string               =   "user";
    public static USER_LOGIN:string             =   "login";   

    //-----------------ORDER-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_ORDERS:string             =   "orders";
    public static GET_ORDER:string                  =   "order";

    public static ORDERS_COMPLETE:string            =   "complete";
    public static ORDERS_COMPLETE_STRING:string     =   "Ordenes completas";
    public static ORDERS_INCOMPLETE:string          =   "incomplete";
    public static ORDERS_INCOMPLETE_STRING:string   =   "Ordenes incompletas";
    public static ORDERS_COMPANY_COMPLETE:string    =   "company_complete";
    public static ORDERS_COMPANY_INCOMPLETE:string  =  "company_incomplete";

    //-----------------COMPANY-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_COMPANYS:string       =   "companys";
    public static GET_COMPANY:string            =   "company";

    /* -------------------- MSG - MODAL -------------------- */

    //GENERIC
    public static MODAL_TYPE_SUCCESS:SweetAlertType     =   "success";
    public static MODAL_TYPE_ERROR:SweetAlertType       =   "error";
    public static MODAL_TYPE_WARNING:SweetAlertType     =   "warning";
    public static MODAL_TYPE_INFO:SweetAlertType        =   "info";
    public static MODAL_TYPE_QUESTION:SweetAlertType    =   "question";
    public static MODAL_BUTTON_CANCEL:string            =   "Cancelar"

    //ERROR
    public static MSG_ERROR_TITLE_LOGIN:string          =   "Error al realizar login";
    public static MSG_ERROR_DESCRIPTION_LOGIN:string    =   "Ha ocurrido un error. Revisa tus credenciales.";
    public static MSG_ERROR_USER_INACTIVATED            =   "Usuario desactivado, habla con su responsable para volver a activarlo";
    public static ALERT_EMAIL:string                    =   "Introduce en el formato correcto el email";
    public static ALERT_PASSWORD:string                 =   "Introduzca bien el formato de la password";

    //SUCCESS
    public static MSG_SUCCESS_TITLE_LOGIN:string    =   "Datos correctos";
    public static ALERT_ORDER_INIT:string           =   "La orden ";
    public static ALERT_ORDER_FINISH:string         =   " ha sido modificada";
    public static ALERT_ORDER_ERROR:string          =   " ha fallado al ser modificada";
    public static MSG_TITLE_SUCCESS:string          =   "Operación realizada con éxito";

    //MODAL DOWN USER
    public static TITLE_MODAL_DOWN_USER:string      =   "¿Seguro que quieres dar de baja al usuario?";
    public static TEXT_MODAL_DOWN_USER:string       =   "No se mostrará ni podrá logearse ";
    public static TEXT_CONFIRM_BUTTON:string        =   "Dar de baja";
    public static MSG_TEXT_DOWN_USER_SUCCESS:string =   " ha sido dado de baja";



    /* -------------------- EXPRESSION REGULAR -------------------- */

    public static EXP_EMAIL                         =   /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    public static EXP_PASSWORD                      =   /^[A-Z]{1}[a-z|A-Z|0-9]+/;


    /* -------------------- OBJECTS SESSION -------------------- */
    public static USER_SESSION                      =   "userSession";

}
