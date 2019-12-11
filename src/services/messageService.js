const productService = {
    createMessage: function (data) {
      
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
        
        return res.json()});
    },

    deleteMessage: function (id) {
      return fetch(`http://localhost:9999/api/message/${id}`, {
        
        method: 'DELETE',
        credentials: 'include'
      }).then(res =>{
        return res});
    },
    editMessage: function (data) {
      const id = data.id
      return fetch(`http://localhost:9999/api/message/${id}`, {
        body: JSON.stringify(data),
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include',
       
      }).then(res =>{
        return res.json()});
    }
      
    
    
}



export default productService;