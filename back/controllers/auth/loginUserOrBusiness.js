const generateAuthToken = require("../../utils/generateAuthToken");
const User = require("../../models/user");
const Business = require("../../models/business");
const loginUserOrBusiness = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if a user or business with the provided email exists
        const user = await User.findOne({ email });
        const business = await Business.findOne({ email });

        if (!user && !business) {
            return res.status(401).json({ message: "Invalid email." });
        }

        // Get the associated password document
        const passwordQuery = user ? { userId: user._id } : { businessId: business._id };
        const storedPassword = await Password.findOne(passwordQuery);

        // Compare the provided password with the stored password hash
        const isPasswordMatch = await verifyPassword(password, storedPassword.hash);

        if (isPasswordMatch) {
            // Generate an authentication token
            const payload = user ? { id: user._id, role: "user" } : { id: business._id, role: "business" };
            const token = generateAuthToken(payload);

            // Create a session
            req.session.loggedIn = true;
            req.session.userType = user ? "user" : "business";
            req.session.userId = user ? user._id : business._id;

            res.json({ token });
        } else {
            res.status(401).json({ message: "Invalid password." });
        }
    } catch (error) {
        console.error("Error in loginUserOrBusiness:", error);
        res.status(500).json({ message: "Error logging in user or business." });
    }
};

module.exports = loginUserOrBusiness;


// kind of situation we're looking at here for each page to check if logged in using session storage. - 
// need to check on every page if logged in, if not, redirect to login page ? that's why would be nice to have a login page.

{/* <template>
  <div>
    <button @click="login()">Log In</button>
    <p>Logged In: {{ isLoggedIn }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    async login() {
      // Make an API call to log in the user or business
      // ...

      // Store the authentication token and user data in the session storage
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userType", userType);
      sessionStorage.setItem("userId", userId);

      // Set the logged in state to true
      this.isLoggedIn = true;
    },
  },
  created() {
    // Check if the user is already logged in on page load
    const token = sessionStorage.getItem("token");
    const userType = sessionStorage.getItem("userType");
    const userId = sessionStorage.getItem("userId");
    if (token && userType && userId) {
      // Set the logged in state to true
      this.isLoggedIn = true;

      // Make an API call to verify the authentication token and user data
      // ...
    }
  },
};
</script> */}