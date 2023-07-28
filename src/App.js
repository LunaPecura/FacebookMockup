import "./App.css";
import axios from 'axios'
import { useState, useEffect } from "react";
import TopBar from './components/TopBar';
import MainContainer from './components/MainContainer';

function App() {

	const [currentChar, setCurrentChar] = useState([]);
	const [currentName, setCurrentName] = useState("");

	useEffect( () => {
		getChar(1);
	}, []);

	const getChar = (id) => {
		axios.get('https://spapi.dev/api/characters/'+id).then(response => {
			const newChar = response.data.data;
			setCurrentChar(newChar);
			// setCurrentChar(response);
			setCurrentName(response.data.data.name);
			console.log(response.data.data.name);
		})
	}

	const getRandomChar = () => {
		getChar(Math.ceil(Math.random()*100))
	}

	

	return (
		<div className="App">
			<TopBar />
			<MainContainer char={currentChar} name={currentName} onClickFn={getRandomChar} />
		</div>
	);
}

export default App;
