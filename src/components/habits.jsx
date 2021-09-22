import React, { Component } from 'react'
import Habit from './habit'
// 여러가지 습관들을 여기서 만들것임. 데이터와 처리하는 함수.
class Habits extends Component {
  //데이터를 가지고 있는 곳*수정, 삭제, 추가..
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  } //data를 가지고 있는 state *(state =Object, array habits is in state )

  //param habit 을 받아 카운트를 증가, 감소..
  handleIncrement = habit => {
    console.log(`handleIncrement ${habit}`) //handleIncrement가 호출되고  증가해야 하는 habit 출력. 
  }

  handleDecrement = habit => {
    console.log(`handleDecrement ${habit}`)
  }
  //param habit 을 받아 어떤 habit을 삭제 할것인지.
  handleDelete = habit => {
    console.log(`handleDelete ${habit}`)
  }

  render() {
    //render에서 위  state 에 있는것 표기
    return (
      <ul>
        {
          //for js {}
          this.state.habits.map(
            habit => (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.handleIncrement}//callback func.
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            ) //Habit components 에 habit이라는 오브젝트를 전달해준다.
          )
        }
      </ul>
    )
  }
}

export default Habits
