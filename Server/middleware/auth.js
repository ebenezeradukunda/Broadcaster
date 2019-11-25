import Joi from "@hapi/joi";
import User from '../models/usersModel';

class Validater{

   validateUser (req, res, next){

      const schema = Joi.object().keys({

         firstname: Joi.string().min(3).required(),
         lastname: Joi.string()
            .min(3)
            .required(),
         email: Joi.string()
            .email()
            .required(),
         phoneNumber: Joi.number().required(),
         username: Joi.string()
            .alphanum()
            .min(5)
            .required() ,
         password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{3,30}$/)
            .required()
      });
      const { error } = schema.validate(req.body);
      if (error) {
      return res.status(401).json({
         status: 401,
         message: error.details[0].message
         });
      }else {
         next();
      }
   }

   checkUserExist(req, res, next){
      const userExist = User.users.filter((user) =>{
         return user.email === req.body.email;
      });
      if(userExist.length > 0){
      return res.status(401).json({
         status: 401,
         message: 'User already exist'
         });
      }
      return next();   
   }
} 

export default new Validater();