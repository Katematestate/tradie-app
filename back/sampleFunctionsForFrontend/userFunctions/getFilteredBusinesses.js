const getFilteredBusinesses = async (businessName = "", businessLocation = "", skills = "") => {
  try {
    const queryParams = new URLSearchParams();

    if (businessName) {
      queryParams.append("businessName", businessName);
    }
    if (businessLocation) {
      queryParams.append("businessLocation", businessLocation);
    }
    if (skills) {
      queryParams.append("skills", skills);
    }

    const response = await fetch(`http://localhost:4000/businesses/?${queryParams.toString()}`);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const received_data = await response.json();
    // Replace the following line with your data variable that you want to populate
    // this.filteredBusinesses = received_data;
    console.log(received_data);
  } catch (error) {
    console.error("Error fetching filtered businesses:", error);
  }
};