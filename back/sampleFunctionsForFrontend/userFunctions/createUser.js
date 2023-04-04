// can copy paste this method to your methods section in your page/component

const createUser = async (email, name, password) => {
    try {
        const response = await fetch("http://localhost:4000/auth/signup/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                name,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const createdUser = await response.json();
        console.log("User created successfully:", createdUser);
        return createdUser;
        // this function returns the newly created user object
    } catch (error) {
        console.error("Error creating user:", error);
    }
};
