function Login(){
    const login=()=>{
        localStorage.setItem('login', true)
    }
    return(
        <div>
            <input type="text" placeholder="User id" /> <br />
            <input type="text" placeholder="Password"/> <br />
            <button onClick={login}>Login</button>

        </div>
    )
};

export default Login;