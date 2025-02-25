import { db } from "../utils/db.connect.util";

interface IRegisterUser{
    last_name: string,
    first_name: string,
    phone_number: string,
    email: string,
    password:string
  }

export const user_service = {
    register_user: async (data: IRegisterUser,hashedPassword:string) => {
        return db.user.create({
          data: {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:hashedPassword,
            phone_number:data.phone_number
          },
        });
    },
    get_account_by_email:async(email:string)=>{ 
        return db.user.findUnique({
            where:{
                email
            }
        })
    }
}