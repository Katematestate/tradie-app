const createUser = async (email, name, password) => {
    try {
        const response = await fetch("http://localhost:4000/users/", {
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
    } catch (error) {
        console.error("Error creating user:", error);
    }
};
// this function returns the newly created user object