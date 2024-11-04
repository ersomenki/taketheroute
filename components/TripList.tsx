import { NextPage } from 'next';

const TripList: NextPage = () => {
    const trips = [
        { id: 1, destination: 'Москва', date: '2024-10-05' },
        { id: 2, destination: 'Санкт-Петербург', date: '2024-10-06' },
        { id: 3, destination: 'Казань', date: '2024-10-07' },
        { id: 4, destination: 'Новосибирск', date: '2024-10-08' },
        { id: 5, destination: 'Екатеринбург', date: '2024-10-09' },
        { id: 6, destination: 'Нижний Новгород', date: '2024-10-10' },
        { id: 7, destination: 'Самара', date: '2024-10-11' },
    ];

    return (
        <div className=" flex flex-col  justify-center items-center w-[calc(100vw-30rem)] p-4 bg-gray-900 rounded-xl">
            <h2 className="text-2xl text-sky-200 font-bold mb-4">Предложения поездок</h2>
            <div className="flex flex-wrap justify-center ">
                {trips.map(trip => (
                    <div key={trip.id} className="min-w-96 m-2">
                        <div className="p-4 border rounded shadow bg-gray-400">
                            <h3 className="text-xl">{trip.destination}</h3>
                            <p>Дата: {trip.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TripList;
