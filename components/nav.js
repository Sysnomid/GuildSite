import React from 'react';

export default class Nav extends React.Component {
  
		constructor(props) {
			super(props);

			this.state = {
				isOpen: false
			};

			this.toggleNavMenu = this.toggleNavMenu.bind(this);
		}

		toggleNavMenu() {
			this.setState({ isOpen: !this.state.isOpen });
		}

		render() {
			let menuIcon;

			if (this.state.isOpen) {
				menuIcon = (
					<path
						fill-rule="evenodd"
						d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
					/>
				);
			} else {
				menuIcon = (
					<path
						fill-rule="evenodd"
						d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
					/>
				);
		}

		return (
			<header className="bg-gray-900 bg-opacity-30 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
				<header className="flex items-center justify-between px-4 py-3 sm:p-0" style={{marginLeft: '12vw'}}>
					
					{/*Link to home*/}
					<a href="/">
						<img id="guild-image" className="h-6" src="images/TDG-val.webp" alt="The Developers Guild"/>
						
						<style jsx>{`
							#guild-image {
								height: 3rem;
								width: 3rem;
							}
      					`}</style>
            				{/*Title*/}
							<p id="title" className="text-xl"><strong>The Devs' Guild</strong></p>
					</a>


					<div className="sm:hidden">
						<button
							onClick={this.toggleNavMenu}
							type="button"
							className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
							aria-label="Navbar Menu"
						>
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								{menuIcon}
							</svg>
						</button>
					</div>
				</header>



				<div className={this.state.isOpen ? 'px-2 pt-2 pb-4 block' : 'px-2 pt-2 pb-4 hidden sm:flex'}  style={{marginRight: '12vw'}}>
					
					{/*Links*/}
					<a
						href="https://discord.gg/xqUN8KY"
						className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
					>
           				 <i className="fa fa-discord fa-2x"></i>
            			<br />
						Discord 
					</a>

					
					<a
						href="https://github.com/The-Developers-Guild"
						className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
					>
            				<i className="fa fa-github fa-2x"></i>
            			<br />
						Github
					</a>

					<a
						href="mailto:trustee@thedevsguild.com"
						className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
					>
            				<i className="fa fa-envelope-o fa-2x"></i>
            			<br />
						Email
					</a>

          			<a
						href="/contact"
						className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
					>
            			<i className="fa fa-address-book-o fa-2x"></i>
            					<br />
						Contact 
					</a>
					
				</div>


			</header>
		);
	}
}
