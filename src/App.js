import React, { Component } from 'react'
import './App.css'
import io from 'socket.io-client'
import PixelGrid from './components/PixelGrid'
import ColorSelect from './components/ColorSelect'

class App extends Component {
  state = {
    colorData: [],
    currentColor: 'red'
  }

  componentDidMount() {
    this.socket = io.connect('http://localhost:9966')

    this.socket.on('get color data', colorData => {
      this.setState({
        colorData
      })
    })
  }

  // 修改单前选择颜色
  setCurrentColor = color => {
    console.log(color)
    this.setState({
      currentColor: color
    })
  }

  // 更新颜色组grid
  handleGridColor = (row, col) => {
    if (this.state.colorData[row][col] === this.state.currentColor) return
    this.socket.emit('update grid color', {
      row,
      col,
      color: this.state.currentColor
    })
  }

  render() {
    return (
      <div className="App">
        <PixelGrid
          colorData={this.state.colorData}
          handleGridColor={this.handleGridColor}
        />
        <ColorSelect setCurrentColor={this.setCurrentColor} />
      </div>
    )
  }
}

export default App
