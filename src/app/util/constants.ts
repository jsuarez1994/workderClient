export class Constants {

    //GLOBAL
    public static LOCAL_API:string          =   "http://localhost:8080/workder_api/";


    /* ----- UTIL ----- */
    public static STRING_EMPTY:string       =   "";
    public static SPLIT_URL:string          =   "/";

    /* ----- MODELS ----- */

    //-----------------ROL-----------------

    //ATRIBUTES
    public static ID_ROL_ADMIN:number       =   0;
    public static ID_ROL_USER_BOSS:number   =   1;
    public static ID_ROL_USER_WORKER:number =   2;
    
    //SERVICES
    public static GET_ALL_ROLS:string       =   "rols";
    public static GET_ROL:string            =   "rol/";


    //-----------------SECTOR-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_SECTORS:string       =   "sectors";
    public static GET_SECTOR:string            =   "sector/";

    //-----------------POSITION-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_POSITIONS:string       =   "positions";
    public static GET_POSITION:string            =   "position/";

    //-----------------USER-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_USERS:string       =   "users";
    public static GET_USER:string            =   "user/";

    public static USER_LOGIN:string        =   "login";   

    //-----------------ORDER-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_ORDERS:string       =   "orders";
    public static GET_ORDER:string            =   "order/";

    public static ORDER_COMPLETE:string       =   "complete";
    public static ORDER_INCOMPLETE:string       =   "incomplete";

    //-----------------COMPANY-----------------

    //ATRIBUTES
    
    //SERVICES
    public static GET_ALL_COMPANYS:string       =   "companys";
    public static GET_COMPANY:string            =   "company/";
    
}
