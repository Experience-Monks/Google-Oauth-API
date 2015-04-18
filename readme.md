#Google-Oauth-API



[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

This module provides a simple API for Ouath via the [Google Client API](https://developers.google.com/api-client-library/javascript/dev/dev_jscript).

## Usage
#### Signin
Get API Credentials from [Google's API Console](https://console.developers.google.com/project)
```
var clientId = '*****************';
var apiKey = '*************';
var scopes = 'https://www.googleapis.com/auth/analytics';
require('google-oauth-api').signin(clientId,apiKey,scopes, onLoginCallback);

 ```

#### Signout
```	
require('google-oauth-api').signout();
 ```
## License

MIT, see [LICENSE.md](https://github.com/Morrisai/Google-Oauth-API/blob/master/LICENSE.md) for details.