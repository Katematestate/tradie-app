// can copy paste this method to your methods section in your page/component

const createBusiness = async (password, businessName, email, companyLogo, companyImage, businessPhoneNumber, businessWebsite,
    businessLocation, businessDescription, skills, pastWorks) => {
    try {
        const response = await fetch("http://localhost:4000/auth/signup/business", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password,
                businessName,
                email,
                companyLogo,
                companyImage,
                businessPhoneNumber,
                businessWebsite,
                businessLocation,
                businessDescription,
                skills,
                pastWorks,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const createdBusiness = await response.json();
        console.log("Business created successfully:", createdBusiness);
        return createdBusiness;
    } catch (error) {
        console.error("Error creating business:", error);
    }
};
// this function returns the newly created business object
