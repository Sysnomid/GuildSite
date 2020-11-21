import React from 'react';

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-900">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex flex-row justify-between lg:w-auto lg:static lg:block lg:justify-start">
			<img src="images/TDG-val.png"></img>
			<a
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-white"
              href="/"
            >
              The Devs' Guild
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto pt-2">
			
               <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="https://discord.gg/xqUN8KY"
                >
                  <br />
                  <i className="fa fa-discord fa-3x text-sm leading-lg text-white opacity-75"></i><span className="ml-2 text-lg">Discord</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="https://github.com/The-Developers-Guild"
                >
                  <br />
                  <i className="fa fa-github fa-3x text-lg leading-lg text-white opacity-75"></i><span className="ml-2 text-lg">Github</span>
                </a>
              </li>

			  
               <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="/contact"
                >
                  <br />
                  <i className="fa fa-address-book-o fa-3x text-lg leading-lg text-white opacity-75"></i><span className="ml-2 text-lg">Contact</span>
                </a>
              </li>

			  
			  
               <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                  href="mailto:trustee@thedevsguild.com"
                >
                  <br />
                  <i className="fa fa-envelope-o fa-3x text-lg leading-lg text-white opacity-75"></i><span className="ml-2 text-lg">Email</span>
                </a>
              </li>

			  


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
