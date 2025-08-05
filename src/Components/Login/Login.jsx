import React, { useState } from 'react';
import "./Login.css";



// Main component for the Login/Sign Up page
const LoginPage = () => {
  // State to toggle between Sign In and Sign Up panels
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handlers to toggle the panels
  const handleSignUpClick = () => setIsSignUpActive(true);
  const handleSignInClick = () => setIsSignUpActive(false);

  // Generic form submission handler
  const handleFormSubmit = (e, formType) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password || (formType === 'signup' && !name)) {
      setError('Please fill in all fields.');
      return;
    }
    
    // TODO: Add your actual login or registration logic here
    console.log(`${formType} submitted with:`, { name, email, password });
    // In a real app, you'd make an API call here.
    // We'll just clear the fields for this demo.
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className=" text-white flex flex-col items-center justify-center min-h-screen p-4 font-sans" style={{ backgroundColor: '#131110' } }>
      <div className="flex items-center gap-4 mb-8">
        <img src="./logo.png" alt="" />
      </div>

      <div 
        className={`l-wrapper bg-gray-800 rounded-2xl shadow-2xl flex w-full max-w-4xl min-h-[500px] relative overflow-hidden transition-all duration-700 ease-in-out ${isSignUpActive ? 'right-panel-active' : ''}`}
        id="container"
      >
        {/* Sign Up Form Container */}
        <div className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-all duration-700 ease-in-out opacity-0 z-10 transform translate-x-[-100%]"
             style={isSignUpActive ? { transform: 'translateX(100%)', opacity: 1, zIndex: 5 } : {}}>
          <form onSubmit={(e) => handleFormSubmit(e, 'signup')} className="bg-gray-800 flex flex-col items-center justify-center p-12 w-full h-full text-center">
            <h1 className="text-3xl font-bold mb-6">Create Account</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-gray-700 border-none p-3 my-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-gray-700 border-none p-3 my-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-gray-700 border-none p-3 my-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="rounded-full bg-blue-600 text-white font-bold uppercase px-12 py-3 mt-4 tracking-wider hover:bg-blue-700 transition-transform active:scale-95">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form Container */}
        <div className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-all duration-700 ease-in-out z-20"
             style={isSignUpActive ? { transform: 'translateX(100%)' } : {}}>
          <form onSubmit={(e) => handleFormSubmit(e, 'signin')} className="bg-gray-800 flex flex-col items-center justify-center p-12 w-full h-full text-center">
            <h1 className="text-3xl font-bold mb-6">Sign in</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-gray-700 border-none p-3 my-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-gray-700 border-none p-3 my-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="text-sm my-4 hover:underline">Forgot your password?</a>
            <button type="submit" className="rounded-full bg-blue-600 text-white font-bold uppercase px-12 py-3 tracking-wider hover:bg-blue-700 transition-transform active:scale-95">Sign In</button>
          </form>
        </div>

        {/* Overlay Container */}
        <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-50"
             style={isSignUpActive ? { transform: 'translateX(-100%)' } : {}}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative h-full w-[200%] transition-all duration-700 ease-in-out"
               style={isSignUpActive ? { transform: 'translateX(50%)' } : { transform: 'translateX(0)' }}>
            
            {/* Overlay Left Panel (for Sign In) */}
            <div className="absolute top-0 w-1/2 h-full flex items-center justify-center flex-col p-10 text-center transition-all duration-700 ease-in-out"
                 style={isSignUpActive ? { transform: 'translateX(0)' } : { transform: 'translateX(-20%)' }}>
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="text-base font-light my-4 leading-snug">To keep connected with us please login with your personal info</p>
              <button onClick={handleSignInClick} className="rounded-full border border-white font-bold uppercase px-12 py-3 tracking-wider hover:bg-white hover:text-gray-800 transition-transform active:scale-95">Sign In</button>
            </div>

            {/* Overlay Right Panel (for Sign Up) */}
            <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center flex-col p-10 text-center transition-all duration-700 ease-in-out"
                 style={isSignUpActive ? { transform: 'translateX(20%)' } : { transform: 'translateX(0)' }}>
              <h1 className="text-3xl font-bold">Hello, Friend!</h1>
              <p className="text-base font-light my-4 leading-snug">Enter your personal details and start your journey with us</p>
              <button onClick={handleSignUpClick} className="rounded-full border border-white font-bold uppercase px-12 py-3 tracking-wider hover:bg-white hover:text-gray-800 transition-transform active:scale-95">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// You would typically have an App component that renders this page
const App = () => {
  return <LoginPage />;
};

export default App;
