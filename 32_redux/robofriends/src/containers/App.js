import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from './../actions';

const mapStateToProps = state => {
    return {
        // searchField: state.searchRobots.searchField
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            // robots: [],
            // searchfield: ''    
            robots: []
        }
    }

    componentDidMount() {
        // Check redux store:
        // console.log(this.props.store.getState());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ robots: users})});
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // }

    render () {
        // const { robots, searchfield } = this.state;
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return (robot.name.toLowerCase().includes(
                // searchfield.toLowerCase()
                searchField.toLowerCase()
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
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        
        // Rejected refactoring (length condition & if/else statement):
        // return !robots.length ?
        // <h1>Loading</h1> :
        // (
        //   <div className='tc'>
        //     <h1 className='f1'>RoboFriends</h1>
        //     <SearchBox searchChange={this.onSearchChange}/>
        //     <Scroll>
        //       <CardList robots={filteredRobots} />
        //     </Scroll>
        //   </div>
        // );
        
        }
    }
}

// Connect is a higher order function (function that returns function):
export default connect(mapStateToProps, mapDispatchToProps)(App);
