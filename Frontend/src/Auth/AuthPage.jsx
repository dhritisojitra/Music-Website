import React, { useContext, useState, useEffect } from 'react';
import { AppContent } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });
    const [rotation, setRotation] = useState(0);
    const [audioWaves, setAudioWaves] = useState(Array(10).fill(20));
    const [musicNotes, setMusicNotes] = useState([]);

    // Rotate the vinyl record
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 1) % 360);
        }, 50);
        
        return () => clearInterval(interval);
    }, []);

    // Animate audio waves
    useEffect(() => {
        const interval = setInterval(() => {
            setAudioWaves(prev => 
                prev.map(() => Math.floor(Math.random() * 30) + 10)
            );
        }, 200);
        
        return () => clearInterval(interval);
    }, []);

    // Generate floating music notes
    useEffect(() => {
        const createMusicNote = () => {
            const noteTypes = ['♪', '♫', '♩', '♬', '♭', '♮', '♯'];
            const newNote = {
                id: Date.now(),
                type: noteTypes[Math.floor(Math.random() * noteTypes.length)],
                left: Math.random() * 80 + 10, // 10-90% from left
                size: Math.random() * 1.5 + 0.8, // 0.8-2.3em
                opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8 opacity
                duration: Math.random() * 8 + 10, // 10-18s for full animation
                delay: Math.random() * 2 // 0-2s delay
            };
            
            setMusicNotes(prev => [...prev, newNote]);
            
            // Remove note after animation completes
            setTimeout(() => {
                setMusicNotes(prev => prev.filter(note => note.id !== newNote.id));
            }, (newNote.duration + newNote.delay) * 1000);
        };
        
        // Create initial set of notes
        for (let i = 0; i < 5; i++) {
            createMusicNote();
        }
        
        // Create new note every 3 seconds
        const interval = setInterval(createMusicNote, 3000);
        
        return () => clearInterval(interval);
    }, []);

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setFormData({ name: '', password: '' });
    };
    
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const navigate = useNavigate()
    const { backendURL, setIsLoggedIn, getUserData } = useContext(AppContent)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            axios.defaults.withCredentials = true
            if (!isLogin) {
                //meaning register
                const { data } = await axios.post(backendURL + '/api/auth/register', formData, {withCredentials:true})
                if (data.success) {
                    setIsLoggedIn(true)
                    console.log("Login response: ", data);
                     getUserData()
                    navigate('/home')
                }
                else {
                    alert(data.message)
                }
            } else {
                const { data } = await axios.post(backendURL + '/api/auth/login', formData, {withCredentials:true})
                if (data.success) {
                    setIsLoggedIn(true)
                    getUserData()
                    console.log("Login response: ", data);
                    navigate('/home')
                }
                else {
                    alert(data.message)
                }
            }
        }
        catch (err) {
            console.error("Authentication error:", err);
        }
    };

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-purple-900 to-indigo-800 overflow-hidden">
            {/* Left Side - Music Animation */}
            <div className="hidden md:flex md:w-1/2 relative items-center justify-center">
                {/* Background circles */}
                <div className="absolute w-96 h-96 bg-purple-700/20 rounded-full animate-pulse"></div>
                <div className="absolute w-80 h-80 bg-indigo-600/20 rounded-full animate-pulse" 
                     style={{animationDelay: "0.5s"}}></div>
                
                {/* Floating music notes */}
                {musicNotes.map(note => (
                    <div 
                        key={note.id}
                        className="absolute text-purple-300 pointer-events-none"
                        style={{
                            left: `${note.left}%`,
                            bottom: 0,
                            fontSize: `${note.size}em`,
                            opacity: note.opacity,
                            animation: `float ${note.duration}s ease-in-out ${note.delay}s`,
                        }}
                    >
                        {note.type}
                    </div>
                ))}
                
                {/* Vinyl Record */}
                <div 
                    className="w-64 h-64 bg-gray-900 rounded-full flex items-center justify-center shadow-2xl z-10"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {/* Vinyl grooves */}
                    <div className="w-60 h-60 border border-gray-800/50 rounded-full absolute"></div>
                    <div className="w-52 h-52 border border-gray-800/50 rounded-full absolute"></div>
                    <div className="w-44 h-44 border border-gray-800/50 rounded-full absolute"></div>
                    <div className="w-36 h-36 border border-gray-800/50 rounded-full absolute"></div>
                    <div className="w-28 h-28 border border-gray-800/50 rounded-full absolute"></div>
                    
                    {/* Vinyl label */}
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full absolute flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-900 rounded-full absolute"></div>
                    </div>
                </div>
                
                {/* Audio waves */}
                <div className="absolute bottom-20 flex items-end justify-center space-x-1 px-8 w-full">
                    {audioWaves.map((height, index) => (
                        <div 
                            key={index}
                            className="w-4 bg-gradient-to-t from-purple-400 to-indigo-400 rounded-t-full"
                            style={{ height: height + 'px' }}
                        ></div>
                    ))}
                </div>
                
                {/* Static music notes */}
                <div className="absolute top-1/4 left-1/4 text-purple-300 animate-bounce text-2xl">♪</div>
                <div className="absolute top-1/3 left-1/3 text-indigo-300 animate-bounce text-lg" style={{animationDelay: "0.5s"}}>♫</div>
                <div className="absolute bottom-1/3 right-1/3 text-purple-300 animate-bounce text-xl" style={{animationDelay: "0.7s"}}>♩</div>
                <div className="absolute top-10 right-1/4 text-indigo-300 animate-bounce text-2xl" style={{animationDelay: "1.2s"}}>♬</div>
            </div>
            
            {/* Right Side (or full width on mobile) - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-8">
                <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl w-full max-w-md p-8">
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">
                        <span className="inline-block mr-2">🎵</span>
                        {isLogin ? 'Login' : 'Register'}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="mb-6">
                            <label className="block text-white/90 mb-2 text-sm">Username</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/20 border border-purple-300/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="mb-8">
                            <label className="block text-white/90 mb-2 text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/20 border border-purple-300/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg flex items-center justify-center font-medium"
                        >
                            <span className="mr-2">{isLogin ? 'Login' : 'Register'}</span>
                            <span>🎧</span>
                        </button>
                    </form>
                    <p className="text-center text-white/80 mt-6">
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                        <button onClick={toggleMode} className="text-purple-300 hover:text-purple-200 hover:underline transition-colors">
                            {isLogin ? 'Register' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
            
            {/* CSS for Floating Animation */}
            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translateY(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(-80vh);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
}