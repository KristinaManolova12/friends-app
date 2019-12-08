const productService = {
    createMessage: function (data) {
      debugger
      return fetch(`http://localhost:9999/api/message`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res =>
        
        {return res});
    },

    loadAllMessages: function (){
      
      return fetch(`http://localhost:9999/api/message`)
      .then(res => {
        debugger
        return res.json()});
    },

    deleteMessage: function (id) {
      
      debugger
      return fetch(`http://localhost:9999/api/message/${id}`, {
        
        method: 'DELETE',
        credentials: 'include'
      }).then(res =>{
        debugger
        return res});
    },
    
}



export default productService;