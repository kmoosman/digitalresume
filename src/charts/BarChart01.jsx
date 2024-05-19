import React, { useRef, useEffect } from "react";
import "chartjs-adapter-moment";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

function BarChart01({ data, width, height }) {
  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;

    const maxDataValue = Math.max(...data.datasets[0].data);
    const yMaxValue = maxDataValue + 20;

    const chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            max: yMaxValue,
            grid: {
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 5,
            },
          },
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false,
              label: (context) => context.parsed.y,
            },
          },
          datalabels: {
            anchor: "end",
            align: "top",
            formatter: (value) => value,
            color: "",
            font: {
              weight: "bold",
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <React.Fragment>
      <div className="px-5 py-10">
        <ul ref={null} className="flex flex-wrap"></ul>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default BarChart01;
