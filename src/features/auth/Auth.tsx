// filepath: src/features/auth/Auth.tsx
import phoneImage from '../../assets/images/landing-2x.png'; // Usa la nueva imagen descargada

function Auth() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 font-family-system">
      {/* Main container */}
      <div className="flex flex-grow items-center justify-center">
  <div
  className="auth-container flex bg-white dark:bg-gray-800 rounded-lg"
    style={{gap: '0'}}
  >
          {/* First column: Image */}
          <div className="hidden lg:flex items-center justify-center dark:bg-gray-900 p-0 m-0 pr-10" style={{height:'auto', width:'auto'}}>
            <img
              src={phoneImage}
              alt="Phone Preview"
              style={{ height: '450px', width: 'auto', display: 'block', margin: '0 auto' }}
            />
          </div>

          {/* Second column: Content */}
          <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-0 m-0" style={{height:'auto', width:'auto'}}>
            {/* First div: Login form */}
            <div className="w-[350px] h-[410px] bg-white dark:bg-gray-800 p-10 rounded shadow-md">
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
              <form className="login-form flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  className="input w-[270px] h-[38px] p-2 mb-1.5 border border-gray-300 rounded-xs dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs flex items-center"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-[268px] h-[38px] p-2 mb-1.5 border border-gray-300 rounded-xs dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xs flex items-center"
                />
                <button
                  type="submit"
                  className="btn w-[268px] h-[32px] mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-sm font-bold"
                >
                  Log In
                </button>

                {/* Divider with "OR" */}
                <div className="flex items-center w-[270px] my-4">
                  <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                  <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">OR</span>
                  <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                </div>

                {/* Facebook login */}
                <div className="flex items-center justify-center w-[270px] mt-4 text-blue-600 dark:text-blue-400 cursor-pointer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook Logo"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="text-sm font-bold">Log in with Facebook</span>
                </div>

                {/* Forgot Password */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>

            {/* Second div: Text */}
            <div className="w-[350px] h-[63px] flex flex-col items-center justify-center mt-3 bg-gray-200 dark:bg-gray-700 rounded">
              <div className="">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Don't have an account?{" "}
                </span>
                <a
                  href="#"
                  className="text-blue-500 hover:underline dark:text-blue-400 text-sm font-bold"
                >
                  Sign up
                </a>
              </div>
            </div>

            {/* Third div: Images */}
            <div className="w-[350px] flex flex-col items-center justify-center mt-4">
              {/* Text "Get the app" */}
              {/* <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Get the app</p> */}

              {/* App Store, Google Play, and Microsoft Store images */}
              {/* <div className="w-[350px] h-[40px] flex items-center justify-center gap-2 ">
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png"
                  alt="Get it on Google Play"
                  className="w-[134px] h-[40px]"
                />
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v4/yu/r/EHY6QnZYdNX.png"
                  alt="Get it from Microsoft"
                  className="w-[110px] h-[40px]"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-center h-[85px] pb-[50px]">
        <p className="text-sm">
          © {new Date().getFullYear()} Instagram Clone. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Auth;
