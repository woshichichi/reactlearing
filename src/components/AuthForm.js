import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useRegisterMutation } from '../store/api/authApi';

const AuthForm = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const [regFn, {error:regError}] = useRegisterMutation();
    const usernameInp = useRef();
    const pwdInp = useRef();
    const emailInp = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const username = usernameInp.current.value;
        const password = pwdInp.current.value;

        if(isLoginForm){
            console.log('Login -->', username, password);
        }else{
            const email = emailInp.current.value;
            // console.log('Register -->', username, password, email);
            regFn({
                username,
                password,
                email
            }).then(res => console.log(res));
        }

        
    };
    return (
        <div>
            <h2>{isLoginForm?'Login':'Register'}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input ref={usernameInp} type="text" placeholder={'Username'} />
                </div>
                {
                    !isLoginForm &&
                    <div>
                        <input ref={emailInp} type="email" placeholder='Email'/>
                    </div>
                }
                <div>
                    <input ref={pwdInp} type="password" placeholder={'Password'} />
                </div>
                <div>
                    <button>{isLoginForm?'Login':'Register'}</button>
                    <a href="#" onClick={
                        event => {
                            event.preventDefault();
                            setIsLoginForm(prevState => !prevState);
                        }
                    }>
                        {
                            isLoginForm?
                            'No,Register':
                            'Yes,Login'
                        }
                    </a>
                </div>
            </form>
        </div>
    );
};

export default AuthForm