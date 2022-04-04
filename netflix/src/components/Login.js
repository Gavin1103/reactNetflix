import LoginFooter from './LoginFooter'

// images
// const loginBg = require('../images/loginbg.jpg')

function Login(){
    return(
        <div id="loginContainer">
            <div id="loginInnerContainer">

                <div id="loginFormContainer">
                    <form action="#">
                        <h2>Inloggen</h2>
                        <input type="text" />
                        <input type="text" />
                        {/* <input type="submit" value="inloggen" /> */}
                        {/* <button>Inloggen</button> */}
                        <a href="/homepage">Inloggen</a>
                    </form>
                </div>

            </div>
            <LoginFooter />
        </div>
    )
}


export default Login;