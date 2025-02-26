"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importing useRouter for navigation
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from '../lib/auth';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
    } catch (error) {
      console.error('Error during email sign-in:', error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUpWithEmail(email, password);
      router.push('/welcome'); // Redirect to welcome page after successful signup (update this to your desired page)
    } catch (error) {
      console.error('Error during email sign-up:', error);
      alert("Signup failed. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      alert("Google sign-in failed.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <p>Welcome back to Perplexica</p>

        {/* Google Sign-In */}
        <div className="google-button-container"> {/* New container for centering */}
          <GoogleSignInButton onClick={handleGoogleSignIn} />
        </div>

        <div className="divider">or Sign in with Email</div>

        {/* Email and Password Form */}
        <form onSubmit={handleEmailSignIn}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            minLength={8}
          />
          <div className="options">
            <label className="remember-me">
              <input type="checkbox" id="remember-me" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        {/* Sign-up button */}
        <div className="register-link">
          Not registered yet?{" "}
          <button onClick={() => router.push('/signup')} className="signup-button">
            Create an Account
          </button>
        </div>
      </div>

      {/* Style */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }
        body {
          background-color: #f5f5f5;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .login-box {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          width: 400px;
          text-align: center;
        }
        h1 {
          margin-bottom: 10px;
          font-size: 2rem;
          color: #333;
        }
        p {
          margin-bottom: 20px;
          color: #777;
        }
        .divider {
          margin-bottom: 15px;
          color: #aaa;
          font-size: 0.9rem;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        input[type="email"],
        input[type="password"] {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          margin-bottom: 15px;
          font-size: 1rem;
          width: 100%;
          background-color: white;
          color: black; /* Change text color to black */
        }
        .options {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .remember-me {
          display: flex;
          align-items: center;
        }
        .remember-me input {
          margin-right: 5px;
        }
        .remember-me span {
          color: #777;
          font-size: 0.9rem;
        }
        .forgot-password {
          color: #555;
          text-decoration: none;
          font-size: 0.9rem;
        }
        .forgot-password:hover {
          text-decoration: underline;
        }
        .login-button {
          background-color: #6c63ff;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          width: 100%;
          transition: background-color 0.3s ease;
        }
        .login-button:hover {
          background-color: #5146d1;
        }
        .register-link {
          margin-top: 20px;
          color: #777;
          font-size: 0.9rem;
        }
        .register-link button {
          background: none;
          color: #6c63ff;
          border: none;
          text-decoration: underline;
          cursor: pointer;
        }
        .register-link button:hover {
          color: #5146d1;
        }
        .google-button-container {
          display: flex;                
          justify-content: center;      
          margin-bottom: 15px;         
        }
      `}</style>
    </div>
  );
};

// Google Sign-In Button Component
interface GoogleSignInButtonProps {
  onClick: () => void; // Type for onClick prop
}

const GoogleSignInButton = ({ onClick }: GoogleSignInButtonProps) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        Sign in with Google
        <span className="google-icon">
          <svg viewBox="0 0 48 48">
            <title>Google Logo</title>
            <clipPath id="g">
              <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
            </clipPath>
            <g clipPath="url(#g)" className="colors">
              <path d="M0 37V11l17 13z" fill="#FBBC05" />
              <path d="M0 11l17 13 7-6.1L48 14V0H0z" fill="#EA4335" />
              <path d="M0 37l30-23 7.9 1L48 0v48H0z" fill="#34A853" />
              <path d="M48 48L17 24l-4-3 35-10z" fill="#4285F4" />
            </g>
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    max-width: 320px;
    display: flex;
    overflow: hidden;
    position: relative;
    padding: 0.875rem 72px 0.875rem 1.75rem;
    background-color: #4285f4;
    color: #ffffff;
    font-size: 15px;
    line-height: 1.25rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    align-items: center;
    border-radius: 0.5rem;
    gap: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: none;
    transition: all 0.6s ease;
    filter: brightness(1.2);
  }

  button .google-icon {
    background-color: #fff;
    display: grid;
    position: absolute;
    right: 0;
    place-items: center;
    width: 3rem;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
    filter: brightness(1.2);
  }

  button span svg {
    width: 1.5rem;
    height: 1.5rem;
    filter: drop-shadow(0 0 5px rgba(66, 133, 244, 0.8));
  }

  button:hover {
    box-shadow: 0 4px 30px rgba(66, 133, 244, 0.1),
      0 2px 30px rgba(52, 168, 83, 0.06);
    filter: brightness(1);
  }

  button:hover .google-icon {
    filter: brightness(1);
  }
`;

export default Login;
