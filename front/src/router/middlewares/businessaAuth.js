export default async (_to, _from, next) => {
  const token = sessionStorage.getItem("jwt");
  if (!token) {
    return next("/login");
  }

  const response = await fetch("http://localhost:4000/businesses/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) {
    next();
  } else {
    next("/login");
  }
};
