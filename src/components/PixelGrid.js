import React, { PureComponent } from 'react'

const tableStyle = {
  zoom: 15
}

export default class PixelGrid extends PureComponent {

  render() {
    console.log('pixel grid render')
    const { colorData } = this.props
    return (
      <table style={tableStyle}>
        <tbody>
        {
          colorData.map((row, rowIdx) => {
            return (
              <tr key={rowIdx}>
                {
                  row.map((color, colIdx) => {
                    return (<td key={colIdx} style={{backgroundColor: color}} onClick={() => this.props.handleGridColor(rowIdx, colIdx)}></td>)
                  }) 
                }
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }

}