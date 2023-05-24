import React from 'react';
import Navigation from "../../ui/Navigation";

const Register = () => {
    return (
        <div className="container">
            <Navigation/>

            <div className="block container-3">
                <h2 className="title text-center">Создание аккаунта</h2>
                <form action="" method="post">
                    <input type="hidden" name="type" value="register"/>
                    <div className="input_box">
                        <p className="input_text">Логин:</p>
                        <input name="login" type="text" className="input_item" placeholder="Введите логин"/>
                    </div>
                    <div className="input_box">
                        <p className="input_text">Почта:</p>
                        <input name="email" type="text" className="input_item" placeholder="Введите почту"/>
                    </div>
                    <div className="input_box">
                        <p className="input_text">Пароль:</p>
                        <input name="password" type="password" className="input_item" placeholder="Придумайте пароль"/>
                    </div>
                    <div className="input_box">
                        <p className="input_text">Повторите пароль:</p>
                        <input name="password_repeat" type="password" className="input_item" placeholder="Повторите пароль"/>
                    </div>
                    <button className="form_button">Создать</button>
                </form>
            </div>
        </div>
    );
};

export default Register;