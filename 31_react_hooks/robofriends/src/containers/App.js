import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''    
    //     }
    // }
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)});  
        // console.log(robots, searchfield);
        console.log(count);
    },[count]) // Only run if count changes
    // },[])
    // componentDidMount() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => {this.setState({ robots: users})});
    // }

    const onSearchChange = (event) => {
        // this.setState({ searchfield: event.target.value })
        setSearchfield(event.target.value)
    }
    
    // render () {
        // const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
        return (robot.name.toLowerCase().includes(
            searchfield.toLowerCase()
        ));
    })
    if (robots.length === 0) {
        return (
            <div className='tc'>
                <h1 className='f1'>Loading...</h1>
            </div>
        );
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                {/* <SearchBox searchChange={this.onSearchChange}/> */}
                <button onClick={() => setCount(count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;