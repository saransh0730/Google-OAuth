
function SignIn(){
    let oauthEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauthEndpoint)

    var params = {
        "client_id": "746295690564-6f6dj509esnpf24ha210pui4sgbfngoo.apps.googleusercontent.com",
        "redirect_uri":"http://127.0.0.1:5500/profile.html",
        "response_type":"token",
        "scope":"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
        "include_granted_scopes": 'true',
        'state': 'pass-through-value'
    }

    for(var p in params){
        let input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name',p)
        input.setAttribute('value', params[p])
        form.appendChild(input)
    }
    document.body.appendChild(form)
    form.submit()
}

function SignUpWithFacebook() {
    let oauthEndpoint = "https://www.facebook.com/v12.0/dialog/oauth";

    // Create a form element
    let form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauthEndpoint);

    var params = {
        "client_id": "1145388830231784",
        "redirect_uri": "http://127.0.0.1:5500/profile.html",
        "response_type": "token",
        "scope": "email",
        "include_granted_scopes": 'true',
        "state": "pass-through-value"
    };

    for (var p in params) {
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
}
