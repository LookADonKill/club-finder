import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-10">
            <h1 className="text-5xl font-bold mb-7">
                Student Club Portal
            </h1>

            <p className="text-lg mb-5 max-w-2xl">
                Discover communities based on your interest.
            </p>

            <Link to="/clubs" className="bg-blue-500 text-shadow-black p-4 flex gap-6">
                All Clubs
            </Link>
        </div>
    );
}

export default Home;