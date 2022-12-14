import React from 'react';
import Navbar from '../../components/NavBar';
import './personal.css'
 
const Personal = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='container'>
      <div className='container_flex'>
        <div className='about_profile'>
          <h2>Личный кабинет</h2>
          {/* К ежемесячным тратам прикрутить функционал */}
          <p>Ежемесячные траты: </p> 
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
                <td>350$</td>
              </tr>
              <tr>
                <td>Kino</td>
                <td>350$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};
 
export default Personal;