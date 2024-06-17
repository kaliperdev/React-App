import React from 'react';
import './Sidebar.css';
import { useClerk } from '@clerk/clerk-react';

const Sidebar: React.FC = () => {
  const { signOut } = useClerk();

  return (
    <div className="sidebar">
      <h1>DashStack</h1>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Chat
            <ul>
              <li>New Chat</li>
              <li>Chat History 1</li>
              <li>Chat History 2</li>
              <li>Chat History 3</li>
            </ul>
          </li>
          <li>Data Model
            <ul>
              <li>Train Data</li>
              <li>Feedback Data</li>
            </ul>
          </li>
          <li>Setting
            <ul>
              <li>Connect DB</li>
              <li>Account</li>
              <li>Help</li>
            </ul>
          </li>
        </ul>
      </nav>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Sidebar;
