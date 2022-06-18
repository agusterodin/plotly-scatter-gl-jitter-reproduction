import dynamic from 'next/dynamic'
import mockData from '../mockData'

const Plotly = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function Home() {
  return (
    <Plotly
      data={mockData}
      layout={{
        showlegend: false,
        hovermode: 'x',
        yaxis: {
          fixedrange: true,
          autorange: true,
          showgrid: false,
          type: 'log',
          showexponent: 'all',
          exponentformat: 'e'
        },
        xaxis: {
          type: 'date',
          showgrid: false
        },
        selectdirection: 'h',
        autosize: true,
        responsive: true,
        margin: {
          b: 40,
          l: 30,
          r: 0,
          t: 4
        },
        plot_bgcolor: 'rgba(0,0,0,0)',
        paper_bgcolor: 'rgba(0,0,0,0)',
        bargap: 0,
        bargroupgap: 0
      }}
      config={{
        scrollZoom: true
      }}
      useResizeHandler={true}
    />
  )
}
