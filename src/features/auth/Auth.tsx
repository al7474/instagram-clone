// filepath: src/features/auth/Auth.tsx
import React from 'react';

function Auth() {
  return (
    <div className="auth-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Instagram Clone</h1>
      <form className="login-form bg-white p-6 rounded shadow-md w-80">
        <input
          type="text"
          placeholder="Username or Email"
          className="input w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="input w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="btn w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
      <p className="register-link mt-4 text-sm">
        Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
      </p>
    </div>
  );
}

export default Auth;