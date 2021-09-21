import React, { Component } from 'react';
import Habit from './habit';
// 여러가지 습관들을 여기서 만들것임.
class Habits extends Component {
    state ={
        habits: [
            {id:1, name: 'Reading', count:0},
            {id:2, name: 'Running', count:0},
            {id:3, name: 'Coding', count:0},

        ],
    }; //data를 가지고 있는 state *(state =Object, array habits is in state )
    render() { //render에서 위  state 에 있는것 표기
        return <ul>
            { //for js {}
               this.state.habits.map(habit =>
                <Habit key={habit.id} habit={habit}/> //Habit components 에 habit이라는 오브젝트를 전달해준다. 
               )}
        </ul>
    }
}

export default Habits;