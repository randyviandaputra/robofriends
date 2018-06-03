import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res.json();
            })
            .then(users =>  this.setState({robots: users}))
    };

    onSearch = (event) => {
        this.setState({
            searchField: event.target.value
        })
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
        
        return !robots.length
            ?
                <div className='tc'>
                    <h1>Loading ...</h1>
                </div> 
            : (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearch} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;