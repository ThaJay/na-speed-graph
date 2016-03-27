import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import Chart, {Radar} from 'react-chartjs'

class SpeedChart extends Component {
  render () {
    const options = {}
        , angles = [0, 45, 90, 135, 180, 225, 270, 315]
        , cutterPerf = [-2, 17, 20, 18, 15, 18, 20, 17]
        , getCutterVMG = () => angles.map(
            (angle, i) => Math.abs(
              getVelocityMadeGood(angle, cutterPerf[i])
            )
          )
        , getVelocityMadeGood = (degrees, speed) => {
            return (Math.cos(degrees * (Math.PI/180)) * speed)
          }
        , data = {
      labels: angles,
      datasets: [
        {
          label: "Cutter",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: cutterPerf
        }
      , {
          label: "Cutter VMG",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: getCutterVMG()
        }
      ]
    }

    console.log(getCutterVMG())

    return (
      <Radar
        data={data}
        options={options}
        width="600"
        height="600"
      />
    )
  }
}

render(<SpeedChart />, document.getElementsByClassName('root')[0])
