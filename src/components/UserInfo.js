/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/22/2016.
 */
import React, { PropTypes } from 'react';
import '../css/userInfo.css'

const UserInfo =({ user, logout, switchTable }) => {
        if(!user.displayName) {
            return <h2>Добро пожаловать</h2>
        } else {
            const name = user.displayName;
            const isAssembly = user.table === 'assembly';
            const table = isAssembly ? 'delivery' : 'assembly';
            const content = isAssembly ? 'Доставка мебели' : 'Сборка мебели';

            const onSwitchHandler = () => {
                switchTable(table)
            };

            return(
                <div>
                    <h3>Вы вошли как: {name}</h3>
                    <a href="/">Главная</a>
                    <a onClick={onSwitchHandler}>{content}</a>
                    <a onClick={logout}>Выйти</a>
                </div>
            );
        }
};

UserInfo.propTypes = {
    user : PropTypes.object
};

export default UserInfo;