'use strict';
module.exports = {   


  login: function (clientId,apiKey,scopes, callback) {

     require( 'google-client-api' )().then( function( gapi ) {



      
      
        // Step 2: Reference the API key
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


  logout: function(){

    require( 'google-client-api' )().then( function( gapi ) {

     gapi.auth.signOut();

   });
  }
 


};