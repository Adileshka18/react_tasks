import React, { useState } from 'react';

function App() {
  const [isBanned, setIsBanned] = useState(false);

  const handleBan = () => setIsBanned(true);
  const handleUnban = () => setIsBanned(false);

  return (
    <div>
      <p>User is {isBanned ? 'banned' : 'not banned'}</p>

      {!isBanned && <button onClick={handleBan}>Ban User</button>}
      {isBanned && <button onClick={handleUnban}>Unban User</button>}
    </div>
  );
}

export default App;