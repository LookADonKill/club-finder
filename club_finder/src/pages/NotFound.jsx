import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div className="p-10 text-center">
            <h1 className="text-6x1 font-bold mb-6">Error 404</h1>
            <p className="text-xl mb-6">Uh oh! Page not found!</p>
            <Link to="/" className="bg-blue-400 text-white px-6 py-3 rounded-lg">Home</Link>
        </div>
    );
}

export default NotFound;