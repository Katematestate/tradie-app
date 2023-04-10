export default async (_to, _from, next) => {
  const token = sessionStorage.getItem("jwt");
  if (!token) {
    return next("/login");
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}businesses/me`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) {
    next();
  } else {
    next("/login");
  }
};
