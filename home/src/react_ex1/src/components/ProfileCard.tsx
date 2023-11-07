import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  age: number;
  bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  return (
    <div className="profile-card">
      <h2>{props.name}</h2>
      <p>Idade: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default ProfileCard;
