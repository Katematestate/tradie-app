// happens when user sends a quote.
// can copy paste this method to your methods section in your page/component

const createJob = async (userId, businessId, client, jobTitle, jobDescription, jobImage, jobLocation, jobQuote) => {
  try {
    const response = await fetch("http://localhost:4000/jobs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        businessId,
        client,
        jobTitle,
        jobDescription,
        jobImage,
        jobLocation,
        status:"pre quoted",
        jobQuote,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const createdJob = await response.json();
    console.log("Job created successfully:", createdJob);
    return createdJob;
  } catch (error) {
    console.error("Error creating job:", error);
  }
};