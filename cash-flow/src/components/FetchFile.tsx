import { useEffect, useState } from 'react';

export const FetchFile = () => {
  const [fileData, setFileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('../../public/Api.json')
      .then((response) => response.json())
      .then((data) => {
        setFileData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the file:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-center p-8 font-sans">
      <h1 className="text-4xl mb-6 text-orange-500">Our Users</h1>
      {loading ? (
        <p className="text-lg text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto max-w-full mx-auto">
          <table className="table-auto w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border-b-2 py-2 px-4 text-left-orange">User ID</th>
                <th className="border-b-2 py-2 px-4 text-left-orange">First Name</th>
                <th className="border-b-2 py-2 px-4 text-left-orange">Last Name</th>
                <th className="border-b-2 py-2 px-4 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(fileData).map((userKey) => {
                const user = fileData[userKey];
                return (
                  <tr key={user.id}>
                    <td className="border-b py-2 px-4">{user.id}</td>
                    <td className="border-b py-2 px-4">{user.firstname}</td>
                    <td className="border-b py-2 px-4">{user.lastname}</td>
                    <td className="border-b py-2 px-4">{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};