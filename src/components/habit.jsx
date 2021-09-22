//rcc
import React, { Component } from 'react'

class Habit extends Component {
  //외부에서 전달받은 데이터를 props로 전달받아와 보여주는 역활 을 하는 컴포넌트. 클릭 발생시 증가 , 감소, 딜리트.를 위한 콜백 함수들을 호출만 하는 컴포넌트로 만들계획.

  handleIncrement = () => {
    //onIncrement func.는  habit을 인자로 받아와 무언가를 실행하는 함수.increment가 발생하게 되면   this안에 props안에 있는 onIncrement라는 함수를 호출해.
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }

  render() {
    // console.log(this.props.habit)
    // const habitName =this.props.habit.name;
    const { name, count } = this.props.habit
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>

        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>

        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>

        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Habit
