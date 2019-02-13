export class Constants {

    /* -------------------- GLOBAL --------------------*/
    public static URL_API:string              =   "http://localhost:8080/workder_api/";


    /* -------------------- UTIL -------------------- */
    public static STRING_EMPTY:string           =   "";
    public static SPLIT_URL:string              =   "/";

    /* -------------------- MODELS -------------------- */

    //-----------------ROL-----------------

    //ATRIBUTES
    public static ID_ROL_ADMIN:number           =   0;
    public static ID_ROL_USER_BOSS:number       =   1;
    public static ID_ROL_USER_WORKER:number     =   2;
    
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
    
    //SERVICES
    public static GET_ALL_USERS:string          =   "users";
    public static GET_USER:string               =   "user";

    public static USER_LOGIN:string             =   "login";   

    //-----------------ORDER-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_ORDERS:string         =   "orders";
    public static GET_ORDER:string              =   "order";

    public static ORDERS_COMPLETE:string         =   "complete";
    public static ORDERS_INCOMPLETE:string       =   "incomplete";
    public static ORDERS_COMPANY_COMPLETE:string =   "company_complete";
    public static ORDERS_COMPANY_INCOMPLETE:string=  "company_incomplete";

    //-----------------COMPANY-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_COMPANYS:string       =   "companys";
    public static GET_COMPANY:string            =   "company";

    /* -------------------- MSG -------------------- */
    //ERROR
    public static MSG_ERROR_TITLE_LOGIN:string      =   "Error al realizar login";
    public static MSG_ERROR_DESCRIPTION_LOGIN:string=   "Ha ocurrido un error. Revisa tus credenciales.";

    public static MSG_SUCCESS_TITLE_LOGIN:string    =   "Datos correctos";

    public static ALERT_EMAIL:string                =   "Introduce en el formato correcto el email";
    public static ALERT_PASSWORD:string             =   "Introduzca bien el formato de la password";



    /* -------------------- EXPRESSION REGULAR -------------------- */

    public static EXP_EMAIL                         =   /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    public static EXP_PASSWORD                      =   /^[A-Z]{1}[a-z|A-Z|0-9]+/;

}
