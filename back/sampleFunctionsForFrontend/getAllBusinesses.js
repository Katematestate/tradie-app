getAllBusinesses = async () => {
    try {
        const response = await fetch("http://localhost:4000/businesses/");

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const received_data = await response.json();
        // this.businesses_list = received_data; replace this line with your data variable that you want to populate
    } catch (error) {
        console.error("Error fetching businesses:", error);
    }
};