import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Backend'den dashboard verilerini çek
    axios.get('http://localhost:8000/dashboard')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Ders Programı" description={data.lessonPlan} />
          <Card title="Son Çözülen Sorular" description={data.lastQuestions} />
          <Card title="Performans Analizi" description={data.performanceAnalysis} />
        </div>
      ) : (
        <p>Veriler yükleniyor...</p>
      )}
    </div>
  );
};

export default Dashboard;
