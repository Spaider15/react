/**
 * Created by Busarov Ivan Spaider629@gmail.com on 11/22/2016.
 */
import React from 'react';
import { Auth } from '../actions'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import '../css/loginForm.css'

let LoginForm = ({ user, dispatch }) => {
    let username, password;
    function handleSubmit(e){
        e.preventDefault();
        dispatch(Auth(username, password))
    }

        return(
          <div id="loginForm">
              <Form className="form" action='/login' onSubmit={handleSubmit}>
                  <FormGroup controlId="loginForm">
                      <ControlLabel className="title">Вход в систему</ControlLabel>
                      <FormControl
                          name="login"
                          inputRef={ref => { username = ref; }}
                          type="text"
                          placeholder="Имя пользователя"
                          className="input"
                      />
                      <FormControl
                          name="password"
                          inputRef={ref => { password = ref; }}
                          type="password"
                          placeholder="Пароль"
                          className="input"
                      />
                  </FormGroup>
                  <Button type="submit">
                      Войти в систему
                  </Button>
                  {user.error ? <p style={{color: 'red', paddingTop: '15px'}}>Сервер не отвечает попробуйте еще раз позже</p> : user.isAuthRequired ? <p style={{color: 'blue', paddingTop: '15px'}}>Загрузка...</p> : ''}
              </Form>
          </div>
        );
};

LoginForm = connect()(LoginForm);
export default LoginForm;
