const authConfig = {
    authority: 'https://au.stellaraesthetics.in/', //Replace with your issuer URL
    client_id: '206769574157323753@authentication_with_react', //Replace with your client id
    redirect_uri: 'http://localhost:5173/dashboard',
    response_type: 'code',
    scope: 'openid profile email',
    post_logout_redirect_uri: 'http://localhost:5173/',
    userinfo_endpoint: 'https://au.stellaraesthetics.in:443/oidc/v1/userinfo', //Replace with your user-info endpoint
    response_mode: 'query',
    code_challenge_method: 'S256',
  };

 export default authConfig;