import LoginFooter from './LoginFooter';
// import '../../src/'

// images
// const loginBg = require('../images/loginbg.jpg')

function Login() {
    return (
        <div id="loginContainer">
            <div id="loginInnerContainer">

                <div id="loginFormContainer">
                    <form action="#">
                        <h2>Inloggen</h2>
                        <input placeholder="E-mail" className="loginVeld" type="text" />
                        <input placeholder="Wachtwoord" className="loginVeld" type="text" />
                        {/* <input type="submit" value="inloggen" /> */}
                        {/* <button>Inloggen</button> */}
                        <a id="loginBtn" href="/homepage">Inloggen</a>
                        <div id="helpContainer">
                            <input type="checkbox" id="RememberMe" />
                            <label for="RememberME">Mijn gegevens onthouden</label>
                            <a className="hulpBtn" href="#">Hulp nodig?</a>
                        </div>
                    </form>
                </div>
            </div>
            <LoginFooter />
        </div>
    )
}


export default Login;