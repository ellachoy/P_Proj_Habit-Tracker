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
  //
  handleIncrement = habit => {
    console.log(`handleIncrement ${habit.name}`) //handleIncrement가 호출되고  증가해야 하는 habit. Reading count 가 증가 되며 출력.
    const habits = [...this.state.habits] //habits라는 배열 안 아템들을 하씩 새운 배열안으로 복사 오는 것.
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits: habits })
  }

  handleDecrement = habit => {
    console.log(`handleDecrement ${habit.name}`)
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    const count = habits[index].count - 1
    habits[index].count = count < 0 ? 0 : count
    this.setState({ habits: habits })
  }
  //param habit 을 받아 어떤 habit을 삭제 할것인지.
  handleDelete = habit => {
    console.log(`handleDelete ${habit.name}`)
    const habits = this.state.habits.filter(item => item.id !== habit.id)
    this.setState({ habits: habits })
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
                onIncrement={this.handleIncrement} //callback func.
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
