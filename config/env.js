import { config } from "dotenv";
 
config( {path: ".env"} );

export const {DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT} = process.env;
    