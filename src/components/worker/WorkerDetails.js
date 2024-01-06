// src/components/WorkerDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WorkerDetails = () => {
  const { workerId } = useParams();
  const [workerDetails, setWorkerDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkerDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5500/api/worker/${workerId}`
        );
        const data = await response.json();

        if (response.ok) {
          setWorkerDetails(data);
          console.log(data);
        } else {
          setError("Worker not found");
        }
      } catch (error) {
        console.error("Error fetching worker details:", error);
        setError("Error fetching worker details");
      }
    };

    fetchWorkerDetails();
  }, [workerId]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>Worker Details</h2>
          {workerDetails ? (
            <>
              <p>ID: {workerDetails._id}</p>
              <p>Name: {workerDetails.username}</p>
              <p>Email: {workerDetails.email}</p>
              <p>Phone: {workerDetails.phoneNumber}</p>
              <p>Address: {workerDetails.address}</p>
              <p>Skills: {workerDetails.skills}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </div>
  );
};

export default WorkerDetails;
