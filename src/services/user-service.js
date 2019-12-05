const userService = {
    register: function (data) {
      return fetch(`http://localhost:9999/api/user/register`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json());
    },
    login: function (data) {
      
       return fetch(`http://localhost:9999/api/user/login`, {
          body: JSON.stringify(data),
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include'
        }).then(res => {
          return res.json()});
        
      },
    
      logout: function () {
        return fetch(`http://localhost:9999/api/user/logout`, {
          method: 'POST',
          credentials: 'include'
        }).then(res => res.text());
      },
      loaduser: function(userId){
        return fetch(`http://localhost:9999/api/user/${userId}`,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(res => {
          debugger
          return res.json()});
      }

}
export default userService;