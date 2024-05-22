"use client";

import { useState, useEffect } from "react";
import './graph.css';
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
import {
    FaFaceSmile,
    FaFaceGrinHearts,
    FaFaceSmileBeam,
    FaFaceFrownOpen,
    FaFaceSadTear,
    FaFaceAngry,
    FaFaceSurprise,
    FaFaceMeh,
    FaFaceGrimace,
    FaFaceFrown,
    FaFaceGrinBeamSweat
} from "react-icons/fa6";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const emotionIcons = {
  "기쁨": FaFaceSmile,
  "사랑": FaFaceGrinHearts,
  "뿌듯함": FaFaceSmileBeam,
  "우울": FaFaceFrownOpen,
  "불안": FaFaceSadTear,
  "분노": FaFaceAngry,
  "놀람": FaFaceSurprise,
  "외로움": FaFaceMeh,
  "공포": FaFaceGrimace,
  "후회": FaFaceFrown,
  "부끄러움": FaFaceGrinBeamSweat
};

const emotionColors = {
  "기쁨": "#f1ff99",
  "사랑": "#ffb3de",
  "뿌듯함": "#fff0b3",
  "우울": "#b6b3ff",
  "불안": "#ffdbb3",
  "분노": "#ffc3b3",
  "놀람": "#bdffb3",
  "외로움": "#c2b8cf",
  "공포": "#c9afb4",
  "후회": "#cccccc",
  "부끄러움": "#c1dbda"
};

const GraphThisWeek = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "긍정점수",
        data: [],
        backgroundColor: "#D07878",
        borderColor: "#D07878",
        borderWidth: 1, // Make the line thinner
        pointRadius: 0, // Remove the points
        spanGaps: true, // Enable gap handling
      },
      {
        label: "부정점수",
        data: [],
        backgroundColor: "#6887D4",
        borderColor: "#6887D4",
        borderWidth: 1, // Make the line thinner
        pointRadius: 0, // Remove the points
        spanGaps: true, // Enable gap handling
      },
    ],
  });

  const [emotions, setEmotions] = useState(Array(7).fill(null));

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const dates = [];
      const positiveScores = [];
      const negativeScores = [];
      const fetchedEmotions = [];

      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);

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
              fetchedEmotions.push(diary.emotions[0]);
            } else {
              positiveScores.push(null); // Use null for missing data
              negativeScores.push(null); // Use null for missing data
              fetchedEmotions.push(null);
            }
          } else {
            positiveScores.push(null); // Use null for missing data
            negativeScores.push(null); // Use null for missing data
            fetchedEmotions.push(null);
          }
        } catch (error) {
          console.error('Error fetching diary:', error);
          positiveScores.push(null); // Use null for missing data
          negativeScores.push(null); // Use null for missing data
          fetchedEmotions.push(null);
        }
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

      setEmotions(fetchedEmotions);
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: true, // Enable grid display
          color: "#777C89", // X-axis grid color
        },
        ticks: {
          color: "#777C89", // X-axis label color
        },
      },
      y: {
        grid: {
          display: false, // Disable Y-axis grid lines
        },
        ticks: {
          stepSize: 50,
          max: 100,
          min: 0,
          color: "#777C89", // Y-axis label color
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#777C89" // Legend label color
        },
      },
    },
  };

  return (
    <div className="graph-container"> 
        <div className="emotion-thisweek-container">
            {emotions.map((emotion, index) => {
              const EmotionIcon = emotion ? emotionIcons[emotion] : null;
              return (
                <div key={index} className="day-emotion">
                  {EmotionIcon && <EmotionIcon style={{ color: emotionColors[emotion], fontSize: "24px" }} />}
                </div>
              );
            })}
        </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default GraphThisWeek;
