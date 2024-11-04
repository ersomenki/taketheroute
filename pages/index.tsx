import { NextPage } from 'next';
import "../app/globals.css"
import TripList from "@/components/TripList";
import Auth from "@/components/Auth";
import Registration from "@/components/Registration";

const HomePage: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold cursor-default text-sky-200">Поехали!</h1>
            <div className="flex items-center justify-between h-[calc(100vh-4rem)] w-[calc(100vw-2rem)] bg-gray-800 rounded-xl p-4">
                <TripList/>
                <Registration/>
            </div>

        </div>
    );
};

export default HomePage;
