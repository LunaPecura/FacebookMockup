
// ROOT COMPONENT
// contains components: TopBar (logo etc.), MainComponent (everything else)



import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import TopBar from './components/TopBar';
import MainContainer from './components/MainContainer';

function App() {

	const [currentChar, setCurrentChar] = useState({ name: "placeholder", id: 0 });
	const [allChars, setAllChars] = useState([]);
	

	// load a list of all characters into the allChars state variable
	useEffect( () => {
		loadCharList();
	}, [])

	// get character with id 'id' to display on the profile page
	const updateChar = (id) => {
		setCurrentChar(allChars[id-1])
		// return allChars[id-1];
	}


	// get an array of all characters
	// incoming data consists of an array of 10 (character) objects and a link to the next page,
	// which consists of an array of 10 objects and a link to the subsequent page, etc etc
	const loadCharList = () => {

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
				else { setAllChars(charList); setCurrentChar(charList[0]); }
			});
		}
	
		// get the recursive process started
		getFirstChunk();
	}


	return (
		<div className="App">
			<TopBar />
			<MainContainer charList={allChars} char={currentChar} updateChar={updateChar} />
		</div>
	);
}

export default App;
