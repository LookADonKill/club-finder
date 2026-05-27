function About() {
    return (
        <div className="p-10 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">About</h1>
            <p className="text-lg mb-4">
                This website is developed by <a className="text-purple-300 underline transition-all duration-300 hover:font-bold hover:shadow-xl cursor-pointer" href="https://github.com/LookADonKill" target="_blank" rel="noopener noreferrer">Juan Xavier</a> to help students find their passion.
            </p>
            <h2 className="text-lg mb-4">
                Built using:
            </h2>
            <ul className="list-disc ml-6 text-lg">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Node</li>
                <li>Vite</li>
                <li>Visual Studio</li>
            </ul>
            <h2 className="text-lg mt-4 mb-4">
                My Socials:
            </h2>
            <ul className="list-disc ml-6 text-lg">
                <li><a className="text-purple-300 underline transition-all duration-300 hover:font-bold hover:shadow-xl cursor-pointer" href="https://www.instagram.com/juanxav_" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a className="text-purple-300 underline transition-all duration-300 hover:font-bold hover:shadow-xl cursor-pointer" href="https://juanxav.carrd.co/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            </ul>
        </div>
    );
}

export default About;
