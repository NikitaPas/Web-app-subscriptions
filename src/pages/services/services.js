import React from 'react';
import Navbar from '../../components/NavBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './services.css'

const categories = [
    {
        label: 'Кино'
    },
    {
        label:'Музыка'
    }
]

const Services = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='container'>
            <div className='services'>
                <h2>Онлайн сервисы</h2>
                <TextField 
                id="standard-basic" 
                label="Название" 
                variant="standard" />
            </div>
            <table className='table'>
                    <thead>
                        <tr>
                            <td>Название сервиса</td>
                            <td>Категория</td>
                            <td>Стоимость</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* Функция на заполнение таблицы */}
                            <td>Netflix</td>
                            <td>Кино</td>
                            <td>50$</td>
                            <td><Button variant="contained">Добавить</Button></td>
                        </tr>
                        <tr>
                            {/* Функция на заполнение таблицы */}
                            <td>Spotify</td>
                            <td>Музыка</td>
                            <td>5$</td>
                            <td><Button variant="contained">Добавить</Button></td>
                        </tr>
                        <tr>
                            {/* Функция на заполнение таблицы */}
                            <td>Spotify</td>
                            <td>Музыка</td>
                            <td>5$</td>
                            <td><Button variant="contained">Добавить</Button></td>
                        </tr>
                    </tbody>
                </table>
        </div>
        </>
    )
}

export default Services;