import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected(props) {
  const navigate = useNavigate();
  const { Component } = props;
  useEffect(() => {
    let login = localStorage.getitem("login");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}
export default Protected;
