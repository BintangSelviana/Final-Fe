import { Navigate } from "react-router-dom";

// TODO: Leave it to your imagination
function Protected({ children }) {
  const token = localStorage.getItem("token");

  if (!token);

  return children;
}

export default Protected;
