import React, { PureComponent } from 'react'

const selectColorData = ['red', 'blue', 'cyan', 'green', 'black', 'yellow']
const buttonStyle = {
  width: '30px',
  height: '30px',
  border: 'none',
  outline: 'none'
}

class ColorSelect extends PureComponent {
  render() {
    console.log('color select render')
    return (
      <div className="color_select_container">
        <ul style={{ display: 'flex' }}>
          {selectColorData.map((color, index) => {
            return (
              <li key={index} style={{ marginRight: '10px' }}>
                <button
                  style={{ ...buttonStyle, backgroundColor: color }}
                  onClick={() => this.props.setCurrentColor(color)}
                ></button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ColorSelect
