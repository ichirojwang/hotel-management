/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // load auth'd user
  const { user, isLoading, isAuthenticated, isFetching } = useUser();

  // if no auth'd user, redirect to login
  useEffect(() => {
    if (!isAuthenticated && !isLoading && !isFetching) navigate("/login");
  }, [isAuthenticated, isLoading, isFetching, navigate]);

  // show spinner while loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // show app if auth'd
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
