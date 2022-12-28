import { body } from 'express-validator'

export const registerValidator = [
    body('email', "Неверный формат почты").isEmail(),
    body('password', "Пароль должен состоять минимум из 6-ти символов").isLength({min: 6}),
    body('fullName', "Укажите имя").isLength({min: 3}),
];