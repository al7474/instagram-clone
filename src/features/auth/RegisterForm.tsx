import React, { useState } from 'react';

interface RegisterFormProps {
  onBack: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onBack }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
    username: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.fullName || !form.username) {
      setError('All fields are required');
      setSuccess('');
      return;
    }
    // Leer usuarios existentes de localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Validar que el usuario o email no exista
    if (users.some((u: any) => u.email === form.email || u.username === form.username)) {
      setError('Email or username already exists');
      setSuccess('');
      return;
    }
    // Guardar nuevo usuario
    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    setSuccess('Account created successfully!');
    setForm({ email: '', password: '', fullName: '', username: '' });
  };

  return (
    <div className="w-[350px] bg-white dark:bg-gray-800 p-10 rounded shadow-md flex flex-col items-center">
      <div className="w-full flex justify-center mb-8 ml-2 pt-5">
        <div
          className="instagram-logo"
          style={{
            backgroundImage:
              'url("https://static.cdninstagram.com/rsrc.php/v4/yB/r/E7m8ZCMOFDS.png")',
            width: "200px",
            height: "51px",
            backgroundRepeat: "no-repeat",
          }}
          aria-label="Instagram"
          role="img"
        ></div>
      </div>
      <form className="signup-form flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Mobile Number or Email"
          className="input w-[270px] h-[38px] p-2 mb-1.5 border border-gray-300 rounded-xs dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs flex items-center"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="input w-[268px] h-[38px] p-2 mb-1.5 border border-gray-300 rounded-xs dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs flex items-center"
        />
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="input w-[268px] h-[38px] p-2 mb-1.5 border border-gray-300 rounded-xs dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs flex items-center"
        />
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="input w-[268px] h-[38px] p-2 mb-1.5 border border-gray-300 rounded-xs dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs flex items-center"
        />
        {error && <div className="text-red-500 text-xs mb-2">{error}</div>}
        {success && <div className="text-green-600 text-xs mb-2">{success}</div>}
        <button
          type="submit"
          className="btn w-[268px] h-[32px] mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-sm font-bold"
        >
          Sign up
        </button>
        <div className="mt-4">
          <button
            type="button"
            className="text-sm text-blue-500 hover:underline dark:text-blue-400"
            onClick={onBack}
          >
            Back to login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
