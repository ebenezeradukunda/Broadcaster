// import uuid from 'uuid'

class ComeUser{
   
   constructor(){
      this.users = [];
   }
   register (data) {
      let newId= this.users.length + 1
      const reporter = {
         id: newId,
         firstname: data.firstname,
         lastname: data.lastname,
         email: data.email,
         phoneNumber: data.phoneNumber,
         username: data.username,
         password: data.password
      };
      this.users.push(reporter);
      return reporter
   }
}
export default new ComeUser();