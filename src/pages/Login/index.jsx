import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useForm} from 'react-hook-form';
import './Login.css';
import {fetchAuth, selectIsAuth} from '../../redux/slices/auth'

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "test@test.ru",
      password: "123456",
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values))
    console.log(data)
    if(!data.payload) {
      return alert('Не удалось авторизоваться');
    }
    if('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token);
    }
  }

 if(isAuth) {
  return <Navigate to="/personal"/>;
 }
  return (
    <Paper className="root">
      <Typography className="title" variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
      variant="standard"
        className='field'
        label="E-Mail"
        error = {Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        {...register('email', {required: 'Укажите почту'})}
        fullWidth
      />
      <TextField 
      variant="standard"
      className="field"
      label="Пароль" 
      {...register('password', {required: 'Укажите пароль'})}
      fullWidth />
      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
        Войти
      </Button>
      </form>
    </Paper>
  );
};

export default Login;