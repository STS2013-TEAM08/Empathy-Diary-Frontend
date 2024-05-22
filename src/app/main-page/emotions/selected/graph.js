"use client";

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import './graph.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphCustomRange = ({ startDate, endDate }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "긍정점수",
        data: [],
        backgroundColor: "transparent",
        borderColor: "#D07878",
        borderWidth: 1, // Make the line thinner
        pointRadius: 0, // Remove the points
        spanGaps: true, // Enable gap handling
      },
      {
        label: "부정점수",
        data: [],
        backgroundColor: "transparent",
        borderColor: "#6887D4",
        borderWidth: 1, // Make the line thinner
        pointRadius: 0, // Remove the points
        spanGaps: true, // Enable gap handling
      },
    ],
  });

  useEffect(() => {
    if (!startDate || !endDate) return;

    const fetchData = async () => {
      const dates = [];
      const positiveScores = [];
      const negativeScores = [];

      let date = new Date(startDate);
      while (date <= endDate) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        dates.push(`${date.getDate()}일`);

        try {
          const response = await fetch(`https://empathydiaryapi.com/posts/period?startDate=${formattedDate}&endDate=${formattedDate}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });

          if (response.ok) {
            const data = await response.json();
            if (data.diaries.length > 0) {
              const diary = data.diaries[0];
              positiveScores.push(diary.positiveScore);
              negativeScores.push(diary.negativeScore);
            } else {
              positiveScores.push(null); // Use null for missing data
              negativeScores.push(null); // Use null for missing data
            }
          } else {
            positiveScores.push(null); // Use null for missing data
            negativeScores.push(null); // Use null for missing data
          }
        } catch (error) {
          console.error('Error fetching diary:', error);
          positiveScores.push(null); // Use null for missing data
          negativeScores.push(null); // Use null for missing data
        }

        date.setDate(date.getDate() + 1);
      }

      setData({
        labels: dates,
        datasets: [
          {
            label: "긍정점수",
            data: positiveScores,
            backgroundColor: "#D07878",
            borderColor: "#D07878",
            borderWidth: 1, // Make the line thinner
            pointRadius: 0, // Remove the points
            spanGaps: true, // Enable gap handling
          },
          {
            label: "부정점수",
            data: negativeScores,
            backgroundColor: "#6887D4",
            borderColor: "#6887D4",
            borderWidth: 1, // Make the line thinner
            pointRadius: 0, // Remove the points
            spanGaps: true, // Enable gap handling
          },
        ],
      });
    };

    fetchData();
  }, [startDate, endDate]);

  const options = {
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false, // Disable grid display for X-axis
        },
        ticks: {
          display: false, // Hide X-axis labels
        },
        display: false // Ensure the X-axis is not displayed
      },
      y: {
        grid: {
          display: false, // Disable grid display for Y-axis
        },
        ticks: {
          stepSize: 50,
          max: 100,
          min: 0,
          color: "#777C89", // Y-axis label color
        },
        display: true // Ensure the Y-axis is displayed
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#777C89" // Legend label color
        },
        display: true // Ensure the legend is displayed
      },
    },
  };

  return (
    <div className="graph-container">
      {!startDate || !endDate ? (
        <p className="no-data-message">감정을 확인하고 싶은 기간을 선택해주세요.</p>
      ) : (
        <Line options={options} data={data} />
      )}
    </div>
  );
};

export default GraphCustomRange;
