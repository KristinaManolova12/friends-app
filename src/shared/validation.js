function validation(propsName, propsValue) {
let message ='';

    if (propsName === 'username' && propsValue.length < 4){
         message = 'Username should be at least 4 characters!'
         return message
    }

    if (propsName === 'password' && propsValue.length < 4){
         message = 'Password should be at least 4 characters!'
        return message
    }
    if (propsName === 'repeatPassword' && propsValue.length < 4){
        message = 'Password should be at least 4 characters!'
       return message
   }

    if ((propsName === 'description' && propsValue.length < 4) || (propsName === 'description' && propsValue.length > 50)){
         message = 'Description should be at least 4 characters and 50 max!'
        return message
    }
    
    if (propsName === 'name' && propsValue.length < 3) {
         message = 'Product name should be at least 3 characters!'
        return message
    }
    if (propsName === 'price' && propsValue < 0.50) {
        message = 'Product price should be at least 0.50$!'
       return message
   }
   if (propsName === 'phone' && propsValue.length < 10) {
    message = 'Phone should be at least 10 numbers!'
   return message

}
if (propsName === 'message' && propsValue.length < 5) {
    message = 'Message should be at least 5 characters!'
   return message
}
}
export default validation