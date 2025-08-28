import React, { useState } from 'react';
import { Tick } from 'highcharts';

interface MockAvatarProps {
  tick: Tick;
  drid?: string;
}

// Mock user data - in a real app this would come from an API or props
const mockUsers = [
  { name: 'Alice Johnson', color: '#FF6B6B', initials: 'AJ' },
  { name: 'Bob Smith', color: '#4ECDC4', initials: 'BS' },
  { name: 'Carol Williams', color: '#45B7D1', initials: 'CW' },
  { name: 'David Brown', color: '#96CEB4', initials: 'DB' },
  { name: 'Emma Davis', color: '#FFEAA7', initials: 'ED' },
  { name: 'Frank Miller', color: '#DDA0DD', initials: 'FM' },
  { name: 'Grace Wilson', color: '#98D8C8', initials: 'GW' },
  { name: 'Henry Taylor', color: '#FDCB6E', initials: 'HT' },
];

export const MockAvatar: React.FC<MockAvatarProps> = ({ tick }) => {
  // Get a consistent user based on the tick position (category index)
  const userIndex = Math.abs(Math.floor(tick.pos)) % mockUsers.length;
  const user = mockUsers[userIndex];
  const [isLoading, setIsLoading] = useState(true);
  const randomDelay = Math.floor(Math.random() * 10000) + 500;

  setTimeout(() => {
    setIsLoading(false);
  }, randomDelay);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
       Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {/* Avatar Circle */}
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg border-2 border-white hover:scale-105 transition-transform"
        style={{ backgroundColor: user.color }}
        title={user.name}
      >
        {user.initials}
      </div>
    </div>
  );
};
