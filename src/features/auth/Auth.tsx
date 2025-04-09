// filepath: src/features/auth/Auth.tsx
// import React from "react";

function Auth() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 font-family-system">
      {/* Main container */}
      <div className="flex flex-grow items-center justify-center">
        <div className="auth-container grid grid-cols-1 md:grid-cols-2 w-[900px] h-[900px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* First column: Image */}
          <div className="hidden md:flex items-center justify-center bg-blue-500 dark:bg-blue-700">
            <img
              src="https://via.placeholder.com/400x400" // Replace with your image URL
              alt="Instagram Preview"
              className="w-3/4 h-auto"
            />
          </div>

          {/* Second column: Content */}
          <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 pr-7">
            {/* First div: Login form */}
            <div className="w-[350px] h-[410px] bg-white dark:bg-gray-800 p-10 rounded shadow-md">
              <div className="w-full flex justify-center mb-8 ml-2">
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
              <form className="login-form flex flex-col items-center ">
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  className="input w-[270px] h-[40px] p-2 mb-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs flex items-center"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-[270px] h-[40px] p-2 mb-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs flex items-center"
                />
                <button
                  type="submit"
                  className="btn w-[268px] h-[32px] mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-sm"
                >
                  Log In
                </button>
              </form>
            </div>

            {/* Second div: Text */}
            <div className="w-[350px] h-[63px] flex items-center justify-center mt-4 bg-gray-200 dark:bg-gray-700 rounded">
              <p className="text-gray-900 dark:text-gray-100 text-center">
                Welcome to Instagram Clone! Please log in to continue.
              </p>
            </div>

            {/* Third div: Images */}
            <div className="w-[350px] h-[100px] flex items-center justify-between mt-4">
              <img
                src="https://via.placeholder.com/50"
                alt="App Store"
                className="w-[50px] h-[50px] rounded"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Google Play"
                className="w-[50px] h-[50px] rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-center h-[85px] pb-[50px]">
        <p className="text-sm">
          © {new Date().getFullYear()} Instagram Clone. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Auth;
