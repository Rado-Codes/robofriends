import React, { useState, useEffect, ChangeEvent } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'
import { getData } from '../utils/data.utils';

export interface Robot {
    id: string,
    name: string,
    email: string,
}


//Create component
function App() {
    const [robots, setRobots] = useState<Array<Robot>>([]);
    const [searchField, setSearchField] = useState('');
    
    //Create function for event of SearchField Component
    const onSearchField = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchField(event.target.value);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Array<Robot>>('https://jsonplaceholder.typicode.com/users');
            setRobots(users);
        }
        fetchUsers();
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => setRobots(users));
    },[]); //when we wanna run the useEffect once in the second argument


    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    //render component
    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchField}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
    );
}

export default App;
