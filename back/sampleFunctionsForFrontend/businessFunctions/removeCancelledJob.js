// deletes job from business' cancelled section and removes job from database.
// can copy paste this method to your methods section in your page/component

const deleteJob = async (jobId) => {
  try {
    const response = await fetch(`http://localhost:4000/jobs/${jobId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const deletedJob = await response.json();
    console.log("Job deleted successfully:", deletedJob);
    return deletedJob;
  } catch (error) {
    console.error("Error deleting job:", error);
  }
};