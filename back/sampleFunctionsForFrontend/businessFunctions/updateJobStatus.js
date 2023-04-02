// can copy paste this method to your methods section in your page/component

// status can be one of these strings...
// ['pre quoted', 'pending', 'in progress', 'completed', 'declined']

const updateJobStatus = async (jobId, newStatus) => {
  try {
    const response = await fetch(`http://localhost:4000/jobs/${jobId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const updatedJob = await response.json();
    console.log("Job status updated successfully:", updatedJob);
    return updatedJob;
  } catch (error) {
    console.error("Error updating job status:", error);
  }
};