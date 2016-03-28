import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import Chart, {Radar} from 'react-chartjs'

const options    = {}
    , angles     = [0,  15,   30,   45,   60,   75,   90,  105,  120,  135,  150,  165, 180, 195, 210, 225, 240,  255,  270, 285,  300, 315,  330, 345]
    , lynxPerf   = [0, 7.1, 11.3, 13.4, 12.6, 12.6, 13.5, 12.6, 10.9, 10.3,   10,  8.8, 7.3, 8.8,  10,10.3,10.9, 12.6, 13.5,12.6, 12.6,13.4, 11.3, 7.1]
    , getVMGPerf = perf => angles.map((angle, i) => Math.abs(getVMG(angle, perf[i])))
    , getVMG     = (degrees, speed) => (Math.cos(degrees*(Math.PI/180))*speed)
    , data       = {
        labels: angles,
        datasets: [
          { label: "Cutter"
          , fillColor: "rgba(220,220,220,0.2)"
          , strokeColor: "rgba(220,220,220,1)"
          , pointColor: "rgba(220,220,220,1)"
          , pointStrokeColor: "#fff"
          , pointHighlightFill: "#fff"
          , pointHighlightStroke: "rgba(220,220,220,1)"
          , data: lynxPerf
          }
        , { label: "Cutter VMG"
          , fillColor: "rgba(220,220,220,0.2)"
          , strokeColor: "rgba(220,220,220,1)"
          , pointColor: "rgba(220,220,220,1)"
          , pointStrokeColor: "#eee"
          , pointHighlightFill: "#eee"
          , pointHighlightStroke: "rgba(220,220,220,1)"
          , data: getVMGPerf(lynxPerf)
          }
        ]
      }

render(
  <Radar data={data} options={options} width="600" height="600" />
, document.getElementsByClassName('root')[0]
)
