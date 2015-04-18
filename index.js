'use strict';
module.exports = {   


  signin: function (clientId,apiKey,scopes, callback) {

     require( 'google-client-api' )( function( gapi ) {
      
       gapi.client.setApiKey(apiKey);    
       setTimeout(checkAuth,1);
      

      function checkAuth() {
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
      }

      function handleAuthResult(authResult) {   
        if (authResult && !authResult.error) {      
         callback();
        } else {      
          login();
        }
      }
        function login(event) {
          // Step 3: get authorization to use private data
          gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
          return false;
        }
      });
  },


  signout: function(){

    require( 'google-client-api' )( function( gapi ) {

     gapi.auth.signOut();

   });
  }
 


};