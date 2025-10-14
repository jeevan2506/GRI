import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotifications } from '../context/NotificationContext';

const AdminDashboard = () => {
  const [message, setMessage] = useState('');
  const [sentNotifications, setSentNotifications] = useState([]);
  const { addNotification, notifications } = useNotifications();
  const navigate = useNavigate();

  // Check if admin is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
    
    // Load sent notifications from localStorage
    const storedNotifications = localStorage.getItem('sentNotifications');
    if (storedNotifications) {
      setSentNotifications(JSON.parse(storedNotifications));
    }
  }, [navigate]);

  // Update sent notifications when notifications change
  useEffect(() => {
    localStorage.setItem('sentNotifications', JSON.stringify(sentNotifications));
  }, [sentNotifications]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (message.trim()) {
      // Create new notification
      const newNotification = {
        id: Date.now(),
        message,
        timestamp: new Date().toISOString()
      };
      
      // Add to notification context
      addNotification({
        message: message.trim(),
      });
      
      // Save to sent notifications
      const updatedNotifications = [newNotification, ...sentNotifications];
      setSentNotifications(updatedNotifications);
      
      // Clear form
      setMessage('');
      
      // Show success message
      alert('Notification sent successfully!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      
      <div className="admin-content">
        <div className="send-notification-section">
          <h3>Send New Notification</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="message">Notification Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                placeholder="Enter notification message..."
              />
            </div>
            <button 
              type="submit" 
              style={{
                display: 'block', 
                width: '100%', 
                padding: '14px 20px',
                background: '#0056b3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              SEND NOTIFICATION
            </button>
          </form>
        </div>
        
        <div className="sent-notifications-section">
          <h3>Sent Notifications</h3>
          {sentNotifications.length === 0 ? (
            <p>No notifications sent yet.</p>
          ) : (
            <div className="sent-notifications-list">
              {sentNotifications.map(notification => (
                <div key={notification.id} className="sent-notification-item">
                  <p>{notification.message}</p>
                  <small>Sent: {formatDate(notification.timestamp)}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;