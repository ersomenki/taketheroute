import { NextPage } from 'next';
import {useState} from "react";
import Registration from "@/components/Registration";


const Auth: NextPage = () => {
    const [registration, setRegistration] = useState<boolean>(false);
    const [entered, setEntered] = useState<boolean>(false);

    console.log(registration);
    console.log(entered);



    return (
        <div className="flex flex-col items-center w-1/5 p-4 bg-gray-900 rounded-xl">
            <h2 className="text-xl text-center text-sky-200 font-bold mb-4">Забронировать или создать поездку</h2>
            <button onClick= {() => setEntered(true)}  className="w-full mb-2 p-2 bg-blue-950 text-white rounded">Войти</button>
            <button onClick= {() => setRegistration(true)} className="w-full p-2 bg-blue-950 text-white rounded">Зарегистрироваться</button>
            <Registration/>
        </div>
    );
};

export default Auth;
