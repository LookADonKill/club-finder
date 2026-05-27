import { useState } from 'react';
import { clubs} from '../datas/clubs';
import ClubCard from '../components/ClubCard';

function ClubList(){
    const [sortOrder, setSortOrder] = useState('asc');
    const [view, setView] = useState('grid');

    let sortedClubs =[...clubs];

    sortedClubs.sort((a, b) => {
        if (sortOrder === 'asc') return a.name.localeCompare(b.name);
        else return b.name.localeCompare(a.name);
    });
    
    return (
        <div className="p-8">
            <div className="flex gap-4 mb-6">
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border p-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <option value="asc">A-to-Z</option>
                    <option value="dsc">Z-to-A</option>
                </select>
                <button onClick={() => setView('grid')} className="bg-blue-400 px-4 py-2 rounded cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">Grid View</button>
                <button onClick={() => setView('list')} className="bg-blue-600 px-4 py-2 rounded cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">List View</button>
            </div>
                
            <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
                {sortedClubs.map((club) => (
                    <ClubCard key={club.id} club={club} view={view}/>
                ))}
            </div> 
        </div>
    );
}

export default ClubList;