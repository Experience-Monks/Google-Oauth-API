<a name="module_Google-Oauth-API"></a>
#google-oauth-api
<a name="exp_module_google-oauth-api"></a>
##module.exports(onComplete) 


[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

This module provides a simple API for Ouath via the [Google Client API](https://developers.google.com/api-client-library/javascript/dev/dev_jscript).

## Usage
```
        var clientId = '*****************';
        var apiKey = '*************';
        var scopes = 'https://www.googleapis.com/auth/analytics';
		GoogleApi.login(clientId,apiKey,scopes, onLoginCallback);

 ```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/threejs-uv-projection-factory/blob/master/LICENSE.md) for details.