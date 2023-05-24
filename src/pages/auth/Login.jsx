import React from 'react';
import Navigation from "../../ui/Navigation";

const Login = () => {
    return (
        <div className="container">
            <Navigation/>

            <div className="block container-3">
                <h2 className="title text-center">Вход в аккаунт</h2>
                <form action="" method="post">
                    <input type="hidden" name="type" value="login"/>
                    <div className="input_box">
                        <p className="input_text">Логин:</p>
                        <input name="login" type="text" className="input_item" placeholder="Введите логин" required/>
                    </div>
                    <div className="input_box">
                        <p className="input_text">Пароль:</p>
                        <input name="password" type="password" className="input_item" placeholder="Введите пароль" required/>
                    </div>
                    <button className="form_button">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Login;