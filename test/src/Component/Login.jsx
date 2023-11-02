import { GoogleLogin } from 'react-google-login'

const clientId = "975298386048-a1f5jvfcctd35f2ckfnvte2mgrrl680n.apps.googleusercontent.com";

function Login() {
    const onSuccess=(res)=>{
        console.log("Login Success! Current User : ",res.profileObj)
    }
    const onFailure=(res)=>{
        console.log("Login Failed!",res)
    }
    return (
        <div id="signButton">
            <GoogleLogin
                clientId={clientId}
                buttonText={'Login'}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login