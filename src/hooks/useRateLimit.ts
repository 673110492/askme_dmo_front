import { useState, useEffect } from 'react';

const RATE_LIMIT_KEY = 'askme_rate_limit';
const MAX_MESSAGES = 3;
const TIME_WINDOW = 60 * 1000; // 1 minute

interface RateLimitData {
  timestamps: number[];
}

export const useRateLimit = () => {
  const [isLimited, setIsLimited] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const getRateLimitData = (): RateLimitData => {
    const data = localStorage.getItem(RATE_LIMIT_KEY);
    return data ? JSON.parse(data) : { timestamps: [] };
  };

  const saveRateLimitData = (data: RateLimitData) => {
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
  };

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const data = getRateLimitData();
    
    // Filter out timestamps older than time window
    const recentTimestamps = data.timestamps.filter(ts => now - ts < TIME_WINDOW);
    
    if (recentTimestamps.length >= MAX_MESSAGES) {
      const oldestTimestamp = Math.min(...recentTimestamps);
      const timeUntilReset = TIME_WINDOW - (now - oldestTimestamp);
      setIsLimited(true);
      setRemainingTime(Math.ceil(timeUntilReset / 1000));
      return false;
    }
    
    setIsLimited(false);
    setRemainingTime(0);
    return true;
  };

  const recordMessage = () => {
    const now = Date.now();
    const data = getRateLimitData();
    
    data.timestamps.push(now);
    // Keep only recent timestamps
    data.timestamps = data.timestamps.filter(ts => now - ts < TIME_WINDOW);
    
    saveRateLimitData(data);
  };

  useEffect(() => {
    if (isLimited && remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 1) {
            setIsLimited(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isLimited, remainingTime]);

  return {
    isLimited,
    remainingTime,
    checkRateLimit,
    recordMessage
  };
};