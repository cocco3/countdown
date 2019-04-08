const GoogleApi = {}

const API_KEY = 'AIzaSyBrU_NdrZlcUSBRMZ8Ou78Pulqd4GUyH30'

const CLIENT_ID = '1011425497813.apps.googleusercontent.com'

const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
].join(' ')

GoogleApi.authorize = function (onSuccess) {

  window.gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: true
  }, function GoogleAuthorizeResult(authResult) {
    console.log(authResult)
    if (authResult && !authResult.error) {
      onSuccess()
    }
  })
}

export default GoogleApi
