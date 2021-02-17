import React from 'react';  
import './CardList.Styles.css';
import {Card} from '../Card/Card.Component';
export const CardList= props => {
    console.log(props);
    return <div class='card-list'>  {
       
         props.monsters.map(mon => <Card key={mon.id} monster={mon}/>)
         
         } 
       </div>;

}