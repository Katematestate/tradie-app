// can copy paste this method to your methods section in your page/component

const getAllJobsOfUser = async (userId) => {
  try {
    const response = await fetch(`http://localhost:4000/jobs/user/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const received_data = await response.json();
    // this.user_jobs_list = received_data; replace this line with your data variable that you want to populate
  } catch (error) {
    console.error("Error fetching jobs for user:", error);
  }
};