import {Link} from 'react-router-dom';

function ClubCard ({club, view}) {
    return (
        <div className={`border rounded-xl p-4 shadow-md bg-white
            ${view === 'list' ? 'flex gap-4 items-center' : ''}`}>
                <img src={club.image} alt={club.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <div>
                    <h2 className="text-2x1 font-bold mb-2">{club.name}</h2>
                    <p className="mb-4">{club.subtitle}</p>
                    <Link to={`/clubs/${club.id}`} className="bg-blue-400 px-4 py-2 rounded cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">View Details</Link>
                </div>
        </div>
    );
}

export default ClubCard;