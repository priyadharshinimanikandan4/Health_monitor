import React from "react";
import UserProfile from "./UserProfile";

function User({ users }) {
  // Check if users are available, else show a message
  if (!users || users.length === 0) {
    return <div>No user data available.</div>;
  }

  return (
    <div>
      <h2>User Section</h2>
      {/* You can pass the first user or handle logic for selecting a specific user */}
      <UserProfile user={users[0]} />
    </div>
  );
}

export default User;
