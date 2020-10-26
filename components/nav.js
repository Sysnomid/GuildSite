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
					<a href="/">
						<img className="h-6" src="TDG.png" alt="The Developers Guild" style={{height: '6vh', width: '6vh',}}/>
            <p className="text-xl">The Developers Guild</p>
					</a>


					<div className="sm:hidden">
						<button
							onClick={this.toggleNavMenu}
							type="button"
							className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
						>
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								{menuIcon}
							</svg>
						</button>
					</div>
				</header>

				<div className={this.state.isOpen ? 'px-2 pt-2 pb-4 block' : 'px-2 pt-2 pb-4 hidden sm:flex'}  style={{marginRight: '12vw'}}>
					<a
						href="/invite"
						class="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
					>
            <i className="fa fa-discord fa-2x"></i>
            <br />
						Discord 
					</a>

					<a
						href="/github"
						className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
					>
            <i className="fa fa-github fa-2x"></i>
            <br />
						Github
					</a>

          <a
						href="/contact"
						className="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
					>
            <i className="fa fa-address-book-o fa-2x"></i>
            <br />
						Contact Us
					</a>
				</div>
			</header>
		);
	}
}