import "./App.css";
import axios from 'axios'
import { useState, useEffect } from "react";
import TopBar from './components/TopBar';
import MainContainer from './components/MainContainer';

function App() {

	const [currentChar, setCurrentChar] = useState({});
	let allCharacters = [];

	// display Character 1 as default upon load
	useEffect( () => {
		axios.get(`https://spapi.dev/api/characters/1`).then(response => {
			setCurrentChar(response.data.data)
		})
	}, []);

	// look up character by ID
	const getChar = (id) => {
		axios.get(`https://spapi.dev/api/characters/${id}`).then(response => {
			setCurrentChar(response.data.data);
		})
	}

	// return a random character with index between 1 and 100
	const getRandomChar = () => {
		getChar(Math.ceil(Math.random()*100))
	}

	

	return (
		<div className="App">
			<TopBar />
			<MainContainer char={currentChar} onClickFn={getRandomChar} />
		</div>
	);
}

export default App;
