import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';

//import { Link } from "react-router-dom";

class Projects extends Component {
	render() {
		return (
			<div className="big-container">
				<h3>Code Projects</h3>
				<div className="projects-container">
					<div className="project-11">
						<h5>
							<a
								className="project-link"
								href="https://presentationapp-client.herokuapp.com/presenters"
							>
								<p>MERN Full-stack App powered by Bootsrap</p>
								<div>
									<p>Presentation App</p>
									<p>
										This is MERN(Mongodb,Express,Reactjs and Node) full stack
										Application, user can Manage presenters by adding,editing
										and deleting presenters from the database and navigate
										through different pages using react-router.
									</p>
								</div>
							</a>
						</h5>
					</div>
					<div className="project-1">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/WorldCountries"
								href="https://benk1.github.io/WorldCountries/"
							>
								<p>Reactjs App powered by MaterializeCSS</p>
								<div>
									{/* <i class="fa fa-code fa-2x" aria-hidden="true" /> */}

									<p>WorldCountries</p>
									<p>
										This is an App created using ReactJs ,you can visualize
										Countries around the globe and view specific details about a
										specific country including their capital city, population of
										each country, name of a certain country plus their specific
										flag attached to each country. you can search each country
										by Country's name and sort them accordingly
									</p>
								</div>
							</a>
						</h5>
					</div>

					<div className="project-4">
						<h5>
							<a
								className="project-link"
								href="https://dry-tor-13844.herokuapp.com/movies"
							>
								<p>Reactjs and NodeJs App </p>
								<p>
									Movie Rental App<br></br>
									This is a MERN fUll-stack MovieRental Application, a user can
									View movies only, signed in users can add and edit
									movies,while admin can delete a movie. It is built using
									MongoDb,Express,React and NodeJs.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-2">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/counter-App"
								href="https://counterapplication.netlify.app"
							>
								<p>Reactjs App powered by Bootsrap</p>
								<p>Counter-App</p>
								<p>
									A Simple application but powerful application, its purpose is
									to teach how reacts work in all aspects.it is based on counter
									where you can increase or decrease counter while other
									functionalities are taking place in the process.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-5">
						<h5>
							<a
								className="project-link"
								href="https://benk1.github.io/CatAPI/"
							>
								<p>Reactjs App </p>
								<p>
									CAT API<br></br>
									This is an Application where you can fetch data from an API
									about your favourite cat, You can view and search where the
									cat is from originally and see all the important feature about
									that cat. Upon clicking the Name of the cat you view more
									details about the cat.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-6">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/AccountBalanceInReact"
								href="https://accountbalance.netlify.app"
							>
								<p>Reactjs App</p>
								<p>
									AccountBalanceInReact<br></br>
									This is Account Balance Implemented using ReactJS, the User
									can add income or expenses and the program will calculate the
									balance and dispaly all the transactions accordingly.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-7">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/Gallery"
								href="https://benk1.github.io/Gallery/"
							>
								<p>Javascript App </p>
								<p>
									Gallery<br></br>
									This is the Gallery integrify stuff, implemented using HTML,
									CSS and JAVASCRIPT. The Gallery is in slide show form where
									you can click next arrow or next button to view next or
									previous photo, you can view the details of a selected photo
									by clicking details button.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-8">
						<h5>
							<a
								className="project-link"
								href="https://github.com/benk1/rails_tutorial"
							>
								<p>Rails App </p>
								<p> Rails_Tutorial</p>
								<p>Ruby on Rails tutorial application</p>
							</a>
						</h5>
					</div>

					<div className="project-9">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/CountryArrayInReact"
								href="https://array-of-countries.netlify.app"
							>
								<p>Reactjs App </p>

								<p>
									{' '}
									ArrayOfCountriesInReact<br></br>
									This is the project where we are able to search any country in
									the World from a given array, it is implemented using ReactJs.
									There are two buttons where you can choose to search either by
									Start With or include buttons.
								</p>
							</a>
						</h5>
					</div>

					<div className="project-10">
						<h5>
							<a
								className="project-link"
								//href="https://github.com/benk1/tableAssignment"
								href="https://benk1.github.io/tableAssignment/"
							>
								<p>Javascript App </p>
								<p>
									TableGenerator<br></br>
									This is a project where we can build any table with given
									inputs, the app is implemeneted using vanilla javascript.
								</p>
							</a>
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
