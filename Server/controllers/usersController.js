import model from '../models/usersModel'

class UserController {
   
   newComer (req, res) {
      const otherUser = model.register(req.body);
      return res.status(200).send({
         status:200,
         message: "User created successfully",
         data:{
            otherUser
         }
      });
   }
}
export default new UserController ();