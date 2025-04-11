import React, { useContext, useState } from 'react';
import { AppContent } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

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

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 px-4">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? 'Login' : 'Register'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <p className="text-center text-sm mt-4">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button onClick={toggleMode} className="text-indigo-600 font-medium hover:underline">
                        {isLogin ? 'Register' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
}
