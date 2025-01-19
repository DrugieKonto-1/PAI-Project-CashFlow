import { useEffect, useState } from 'react';

export const FetchComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = "../assets/Api.json";
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Received data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}