import "./App.css";
import axios from 'axios'
import { useState, useEffect } from "react";
import TopBar from './components/TopBar';
import MainContainer from './components/MainContainer';

function App() {

	const [currentChar, setCurrentChar] = useState({});
	const [allChars, setAllChars] = useState([]);


	// display Character 1 (Gerald Broflovski) as default upon load
	useEffect( () => {
		axios.get(`https://spapi.dev/api/characters/1`).then(response => {
			setCurrentChar(response.data.data)
		})
	}, []);

	// load a list of all characters into the allChars state variable
	useEffect( () => {
		getCharList();
	}, [])

	// helper function: look up character by ID
	const getChar = (id) => {
		axios.get(`https://spapi.dev/api/characters/${id}`).then(response => {
			setCurrentChar(response.data.data);
		})
	}

	// helper function: return a random character with index between 1 and 200
	const getRandomChar = () => {
		getChar(Math.ceil(Math.random()*200))
	}

	// get an array of ALL characters
	// incoming data consists of an array of 10 (character) objects and a link to the next page,
	// which consists of an array of 10 objects and a link to the subsequent page, etc etc
	const getCharList = () => {

		let charList = []; // accumulator
		let next; // link to the next page
		let count = 0; // manually keeping count of the page number due to api bug

		// get first array (characters 1-10)
		const getFirstChunk = () => {
			axios.get(`https://spapi.dev/api/characters/`).then(response => {
				count++; 
				charList.push(...response.data.data);
				next = response.data.links.next;
				getNextChunk();
			});
		}

		// recursively get another array of 10 characters until page 20 is reached
		const getNextChunk = () => {
			axios.get(next).then(response => {
				count++;
				charList.push(...response.data.data);
				next = response.data.links.next;
				if(count<20) { // pages 21 and 22 return an error => don't touch
					getNextChunk();} // attn: recursion
				else { setAllChars(charList); }
			});
		}

		// get the recursive process started
		getFirstChunk();
	}
	

	return (
		<div className="App">
			<TopBar />
			<button className="testButton" onClick={getCharList} disabled>
				FOR TESTING<br />load character list (see console)
			</button>
			<MainContainer char={currentChar} charList={allChars} />
		</div>
	);
}

export default App;
