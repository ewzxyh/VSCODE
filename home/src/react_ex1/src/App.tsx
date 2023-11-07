// App.tsx
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProfileCard from './components/ProfileCard';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const users = ['João', 'Maria', 'Ana', 'José', 'Pedro', 'Paulo', 'Lucas', 'Mateus', 'Marcos', 'Lucas', 'Mateus', 'Marcos'];
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="App">
      <Navbar users={users} setSelectedUser={setSelectedUser} />
      <Carousel showArrows={true} swipeable={true} showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
        {[<div key={selectedUser} className="profile-card">
          <ProfileCard name={selectedUser} age={30} bio="Desenvolvedor de software" />
        </div>]}
      </Carousel>
    </div>
  );
}

export default App;
