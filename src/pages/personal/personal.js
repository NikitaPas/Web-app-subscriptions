import React from 'react';
import Navbar from '../../components/NavBar';
import { useSelector } from "react-redux";
import './personal.css'
import Button from "@mui/material/Button";
import {selectIsAuth} from '../../redux/slices/auth'
 
const Personal = () => {
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth);
  return (
    <>
    <Navbar></Navbar>
    {
      isAuth ? <div className='container'>
      <div className='container_flex'>
        <div className='about_profile'>
          <h2>Личный кабинет</h2>
          {/* К ежемесячным тратам прикрутить функционал */}
          <p>Ежемесячные траты: 55$</p> 
        </div>
        <div className='active_subs'>
          <h2>Активные подписки</h2>
          <table>
            <thead>
              <tr>
                <td className='firstBl'>Сервис</td>
                <td>Ежемесячное списание</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Netflix</td>
                <td>50$</td>
                <Button variant="contained" color="error">
                      Удалить
                </Button>
              </tr>
              <tr>
                <td>Spotify</td>
                <td>5$</td>
                <td><Button variant="contained" color="error">
                      Удалить
                </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
     : <div>Вы не авторизованы для просмотра</div>
    }
    </>
  );
};
 
export default Personal;