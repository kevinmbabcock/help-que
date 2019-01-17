import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Help Que!</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Header;