import { useParams } from 'react-router-dom';
import { clubs } from '../datas/clubs';
import { useState } from 'react';

function ClubDetails() {
    const { clubID } = useParams();
    const club = clubs.find((club) => club.id === clubID);
    
    const [joined, setJoined] = useState(() => {
        const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
        return joinedClubs.includes(clubID);
    });

    function handleJoin() {
        const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
        if(!joinedClubs.includes(clubID)) joinedClubs.push(clubID);
        localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
        setJoined(true);
    }

    if(!club) {
        return (
            <div className="p-10">Club Not Found!</div>
        );
    }

    return (
        <div className="p-10 max-w-4xl mx-auto">
            <img src={club.image} 
            alt={club.name} 
            className="w-full h-48 object-cover" />
            <h1 className="text-5xl font-bold mb-4">{club.name}</h1>
            <p className="text-2xl mb-8">{club.description}</p>
            <h2 className="text-3x1 mb-4 font-bold">Upcoming Events</h2>
            <div className="space-y-5 mb-8">
                {club.events.map((event, index) => (
                    <div key={index} className="border p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <h3 className="font-bold">{event.name}</h3>
                        <p>{event.date}</p>
                    </div>
                ))}
            </div>

            {!joined ? (
                <button onClick={handleJoin}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">Join Club</button>
            ) : (
                <p className="text-red-800 font-bold">You have joined this club!</p>
            )
        }
        </div>
    );
}

export default ClubDetails;