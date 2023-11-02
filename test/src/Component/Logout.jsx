import { GoogleLogout } from 'react-google-login'

const clientId = "975298386048-a1f5jvfcctd35f2ckfnvte2mgrrl680n.apps.googleusercontent.com";

function Logout(){
    const onSuccess=()=>{
        console.log("Logout successfull!!")
    }
    return (
        <div id="signButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
               
            />
        </div>
    )
}

export default Logout