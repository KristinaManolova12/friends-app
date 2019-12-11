const productService = {
    createProduct: function (data) {
      
      return fetch(`http://localhost:9999/api/shop`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res =>
        
        {return res});
    },
    uploadImage: function (formData) {
      
      return fetch(`http://localhost:9999/api/upload`, {
        body: formData,
        method: 'POST',
        // headers: {
        //   'Content-type': 'multipart/form-data'
        // },
        credentials: 'include'
      }).then(res => {
        
        return res.json()});
    },
   
    getimg: function (){
      
      return fetch(`http://localhost:9999/api/upload`)
      .then(res => {
        
        return res.json()});
    },
    loadAllProducts: function (id){
      
      return fetch(`http://localhost:9999/api/shop${id ? `/${id}` : ''}`)
      .then(res => {
        
        return res.json()});
    },
    loadProduct: function (id){
      
      return fetch(`http://localhost:9999/api/shop/${id}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(res => {
        
        return res.json()});
    },
    updateProduct: function (data) {
      const id = data.productId
      
      return fetch(`http://localhost:9999/api/shop/${id}`, {
        body: JSON.stringify(data),
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res =>{
       
        return res});
    },

    deleteProduct: function (id) {
      return fetch(`http://localhost:9999/api/shop/${id}`, {
        
        method: 'DELETE',
        credentials: 'include'
      }).then(res =>{
        return res});
    },
    
}



export default productService;