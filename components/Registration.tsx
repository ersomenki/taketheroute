import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInput {
    firstName: string;
    secondName: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const schema = yup.object().shape({
    firstName: yup.string().required('Имя обязательно'),
    secondName: yup.string().required('Фамилия обязательна'),
    phoneNumber: yup.string().required('Номер телефона обязателен'),
    email: yup.string().email('Неверный формат email').required('Email обязателен'),
    password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязателен'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required('Подтверждение пароля обязательно'),
});

const Registration: React.FC = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                console.log(result.message);
            } else {
                console.error(result.error);
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    return (
        <div className="flex flex-col items-center w-1/5 p-4 bg-gray-900 rounded-xl ">
            {!isRegistering ? (
                <div>
                    <button onClick={() => setIsRegistering(true)} className="w-full mb-2 p-2 bg-blue-950 text-white rounded">Зарегистрироваться</button>
                    <button className="w-full p-2 bg-blue-950 text-white rounded">Войти</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  space-y-4">
                    <h2 className="text-xl font-bold cursor-default text-sky-200 m-auto">Регистрация</h2>
                    <div className="flex flex-col text-red-600">
                        <label className="text-sm font-bold text-sky-200 mb-1">Имя</label>
                        <input type="text" placeholder="Иван"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" {...register('firstName')} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>
                    <div className="flex flex-col text-red-600">
                        <label className="text-sm font-bold text-sky-200 mb-1">Фамилия</label>
                        <input type="text" placeholder="Иванов"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" {...register('secondName')} />
                        {errors.secondName && <p>{errors.secondName.message}</p>}
                    </div>
                    <div className="flex flex-col text-red-600">
                        <label className="text-sm font-bold text-sky-200 mb-1">Номер телефона</label>
                        <input type="tel" placeholder="+7 999 999 99 99"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" {...register('phoneNumber')} />
                        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                    </div>
                    <div className="flex flex-col text-red-600">
                        <label className="text-sm font-bold text-sky-200 mb-1">Email</label>
                        <input type="email" placeholder="example@mail.ru"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" {...register('email')} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col text-red-600">
                        <label className="text-sm font-bold text-sky-200 mb-1">Пароль</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                            type="password" {...register('password')} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div className="flex flex-col text-red-600">
                        <label className="text-sm font-bold text-sky-200 mb-1">Подтверждение пароля</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                            type="password" {...register('confirmPassword')} />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-950 text-white rounded">Зарегистрироваться
                    </button>
                </form>
            )}
        </div>
    );
};

export default Registration;
