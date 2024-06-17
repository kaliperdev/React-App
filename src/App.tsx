import React, { useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import { saveUserToAirtable } from './airtable';
import Sidebar from './Sidebar';
import Header from './Header';
import IframeComponent from './IframeComponent';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App: React.FC = () => {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      const userData = {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
      };
      saveUserToAirtable(userData);
    }
  }, [isSignedIn, user]);

  return (
    <div className="app">
      <SignedOut>
        <div className="login-container">
          <h1>Please Sign In</h1>
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="nav-menu">
          <Sidebar />
        </div>
        <div className="main">
          <Header />
          <ErrorBoundary>
            <IframeComponent />
          </ErrorBoundary>
        </div>
      </SignedIn>
    </div>
  );
};

export default App;
