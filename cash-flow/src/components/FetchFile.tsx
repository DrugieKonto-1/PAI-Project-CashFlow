import { useEffect, useState } from 'react';

interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export const FetchFile = () => {
  const [fileData, setFileData] = useState<{ [key: string]: User } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { //Fetch do pliku Api.json
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
    <div id="background-fetch" className="text-center p-8 font-sans min-h-screen">
      <h1 className="text-4xl mb-6 text-white font-bold">Our Users</h1>
      {loading ? (
        <p className="text-lg text-gray-200 animate-pulse">Loading...</p>
      ) : (
        <div className="overflow-x-auto max-w-4xl mx-auto shadow-lg rounded-lg bg-white p-4">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">User ID</th>
                <th className="py-3 px-4 text-left font-semibold">First Name</th>
                <th className="py-3 px-4 text-left font-semibold">Last Name</th>
                <th className="py-3 px-4 text-left font-semibold">Email</th>
              </tr>
            </thead>
            <tbody>
              {fileData &&
                Object.keys(fileData).map((userKey, index) => {
                  const user = fileData[userKey];
                  return (
                    <tr
                      key={user.id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                      } hover:bg-orange-100 transition duration200`}
                    >
                      <td className="border-b py-3 px-4 text-gray-800">
                        {user.id}
                      </td>
                      <td className="border-b py-3 px-4 text-gray-800">
                        {user.firstname}
                      </td>
                      <td className="border-b py-3 px-4 text-gray-800">
                        {user.lastname}
                      </td>
                      <td className="border-b py-3 px-4 text-gray-800">
                        {user.email}
                      </td>
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