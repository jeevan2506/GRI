import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import '../styles/login.css';
import logo from '../assets/logo.jpeg';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already authenticated
    const isAuth = localStorage.getItem('isUserAuthenticated') === 'true';
    const userRole = localStorage.getItem('userRole')?.trim();
    
    if (isAuth && userRole === 'admin') {
      navigate('/admin');
    } else if (isAuth && userRole === 'user') {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isSignUp) {
        // Create new user account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firestore with 'user' role
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          role: 'user', // Default role for new users
          createdAt: new Date(),
          lastLogin: new Date(),
        });

        localStorage.setItem('isUserAuthenticated', 'true');
        localStorage.setItem('userId', user.uid);
        localStorage.setItem('userRole', 'user');
        navigate('/');
      } else {
        // Sign in existing user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Get user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();

        // Update last login time in Firestore
        await setDoc(
          doc(db, 'users', user.uid),
          { lastLogin: new Date() },
          { merge: true }
        );

        localStorage.setItem('isUserAuthenticated', 'true');
        localStorage.setItem('userId', user.uid);
        localStorage.setItem('userRole', userData?.role || 'user');

        // Redirect based on role
        if (userData?.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Login Error:', err);
      
      if (err.code === 'auth/user-not-found') {
        setError('Email not found. Please sign up.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Wrong password. Please try again.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Email already exists. Please sign in.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (err.code === 'auth/network-request-failed' || err.message?.includes('Connection failed')) {
        setError('Network error. Please check your internet connection and try again.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address. Please try again.');
      } else if (err.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError(err.message || 'An error occurred. Please try again.');
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="user-login-container">
      <motion.div
        className="user-login-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="login-header"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="logo-animation" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={logo} alt="GRI Logo" className="login-logo" />
          </div>
          <h2>{isSignUp ? 'Create Account' : 'Login'}</h2>
          <p>{isSignUp ? 'Create a new account' : 'Sign in to your account'}</p>
        </motion.div>

        {error && (
          <motion.div
            className="error-message"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <motion.input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <motion.input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <motion.button
            type="submit"
            className="login-button"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                ⟳
              </motion.div>
            ) : (
              isSignUp ? 'Sign Up' : 'Sign In'
            )}
          </motion.button>
        </motion.form>

        <motion.div
          className="login-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              style={{
                background: 'none',
                border: 'none',
                color: '#007bff',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: 'inherit',
                fontWeight: 'bold'
              }}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <div className="floating-elements">
        <motion.div
          className="floating-circle circle-1"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-circle circle-2"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="floating-circle circle-3"
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </div>
  );
};

export default UserLogin;
