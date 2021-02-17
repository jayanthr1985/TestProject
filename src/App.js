import logo from './logo.svg';
import './App.css';
import {CardList} from './Components/CardList/CardList.Component';
import {SearchBox} from './Components/Search-Box/Search-Box.Components';
import {Component} from 'react';


class App extends Component{
  constructor(){
    super();
this.state ={
  family:[
    {name: 'Jayanth',
    role:'Daddy',
  id:1
},
    {name: 'Sucharitha',
      role:'Mommy',id:2},

      {name: 'Revanth',
        role:'Brother',id:3},
        
      {name: 'Sahana',
        role:'Sister',id:4}
  ],
  monsters:[],
  searchField :''

}
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
//.then(users=> console.log(users))
  }
  

render()
{
  const {monsters, searchField} = this.state;
  const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  console.log(filteredmonsters);
  return (
    <div className="App">
      <input type='search' placeholder= "Search Monsters" onChange={
          e=> this.setState({searchField : e.target.value})   
      } />
      <SearchBox
      placeholder= "Search Monsters"
      handlechange={        e=> this.setState({searchField : e.target.value})   }      
      />
         <CardList monsters={filteredmonsters}>
       
           </CardList>

    
    </div>
  );
}

}

export default App;
