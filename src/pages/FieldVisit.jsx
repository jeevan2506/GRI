import React, { useState, useEffect } from 'react';
import { database } from '../firebase/config';
import { ref, push, set, onValue } from 'firebase/database';

export default function FieldVisit() {
  const [futureVisits, setFutureVisits] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitId: '',
    comments: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Load field visits from Firebase
    const visitsRef = ref(database, 'fieldVisits');

    onValue(visitsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const visits = Object.values(data);
        const currentDate = new Date();

        const future = visits.filter(visit => new Date(visit.date) >= currentDate)
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        setFutureVisits(future);
      }
      setLoading(false);
    }, {
      onlyOnce: true
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new registration entry in Firebase
    const registrationsRef = ref(database, 'registrations');
    const newRegistrationRef = push(registrationsRef);
    
    // Add timestamp to the registration data
    const registrationData = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    
    set(newRegistrationRef, registrationData)
      .then(() => {
        // Update the registration count for the selected visit
        const visitRef = ref(database, `fieldVisits/${formData.visitId}/registrations`);
        const selectedVisit = [...futureVisits].find(visit => visit.id === formData.visitId);
        
        if (selectedVisit) {
          set(visitRef, (selectedVisit.registrations || 0) + 1);
        }
        
        // Reset form and show success message
        setFormData({
          name: '',
          email: '',
          phone: '',
          visitId: '',
          comments: ''
        });
        setSubmitted(true);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch(error => {
        console.error("Error submitting registration:", error);
        alert("There was an error submitting your registration. Please try again.");
      });
  };

  if (loading) {
    return (
      <div className="loading-container" style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Loading field visits...</h2>
      </div>
    );
  }

  return (
    <div className="field-visit-container" style={{ padding: '20px 0' }}>
      <div className="section-heading" style={{ textAlign: 'center', justifyContent: 'center', marginBottom: '40px' }}>
        <div>
          <small style={{ color: 'var(--muted)' }}>Experiences</small>
          <h2>Field Visits</h2>
          <p style={{ maxWidth: '600px', margin: '10px auto' }}>
            Join our immersive field visits to rural communities and innovation centers. 
            Experience firsthand the challenges and opportunities in rural development.
          </p>
        </div>
      </div>

      {/* Future Visits Section */}
      <div className="future-visits-section" style={{ marginBottom: '60px' }}>
        <h3 style={{
          textAlign: 'center',
          fontSize: '28px',
          marginBottom: '30px',
          position: 'relative',
          display: 'inline-block',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '0 20px 10px',
          borderBottom: '2px solid var(--primary)'
        }}>Upcoming Field Visits</h3>

        <div className="visits-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          margin: '0 auto',
          maxWidth: '1200px'
        }}>
          {futureVisits.length > 0 ? (
            futureVisits.map((visit, index) => (
              <div key={index} className="visit-card" style={{
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1
              }}>
                <div className="visit-image" style={{
                  height: '180px',
                  backgroundImage: `url(${visit.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div className="visit-content" style={{ padding: '20px' }}>
                  <div className="visit-date" style={{
                    display: 'inline-block',
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    marginBottom: '10px'
                  }}>
                    {new Date(visit.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h4 style={{ margin: '0 0 10px', fontSize: '20px' }}>{visit.title}</h4>
                  <p style={{ 
                    margin: '0 0 15px', 
                    color: 'var(--muted)', 
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <span style={{ fontWeight: 'bold' }}>Location:</span> {visit.location}
                  </p>
                  <p style={{ margin: '0 0 15px', fontSize: '15px' }}>{visit.description}</p>
                  <div className="visit-capacity" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '15px'
                  }}>
                    <span>Capacity: {visit.capacity}</span>
                    <span>Registered: {visit.registrations || 0}</span>
                  </div>
                  <div className="progress-bar" style={{
                    height: '8px',
                    background: '#f0f0f0',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${Math.min(((visit.registrations || 0) / visit.capacity) * 100, 100)}%`,
                      background: 'var(--primary)',
                      borderRadius: '4px'
                    }}></div>
                  </div>
                  <div className="visit-status" style={{ textAlign: 'center' }}>
                    {(visit.registrations || 0) >= visit.capacity ? (
                      <span style={{ color: 'red', fontWeight: 'bold' }}>Fully Booked</span>
                    ) : (
                      <span style={{ color: 'green', fontWeight: 'bold' }}>
                        {visit.capacity - (visit.registrations || 0)} spots available
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-visits" style={{ 
              gridColumn: '1 / -1', 
              textAlign: 'center',
              padding: '30px',
              background: '#f9f9f9',
              borderRadius: '10px'
            }}>
              <h4>No upcoming field visits scheduled at the moment.</h4>
              <p>Please check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </div>

      {/* Registration Form Section */}
      <div className="registration-section" style={{
        background: '#f9f9f9',
        padding: '40px 20px',
        borderRadius: '10px',
        maxWidth: '800px',
        margin: '0 auto 60px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{
          textAlign: 'center',
          fontSize: '24px',
          marginBottom: '30px'
        }}>Register for a Field Visit</h3>

        {submitted ? (
          <div className="success-message" style={{
            background: '#e7f7e7',
            border: '1px solid #c3e6c3',
            color: '#2e7d32',
            padding: '15px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <h4 style={{ margin: '0 0 10px' }}>Registration Successful!</h4>
            <p style={{ margin: '0' }}>Thank you for registering. We'll contact you with further details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'grid',
            gap: '20px'
          }}>
            <div className="form-group">
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  fontSize: '16px'
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  fontSize: '16px'
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  fontSize: '16px'
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="visitId" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Select Field Visit *
              </label>
              <select
                id="visitId"
                name="visitId"
                value={formData.visitId}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  backgroundColor: 'white'
                }}
              >
                <option value="">-- Select a field visit --</option>
                {futureVisits.map((visit, index) => (
                  <option 
                    key={index} 
                    value={visit.id}
                    disabled={(visit.registrations || 0) >= visit.capacity}
                  >
                    {visit.title} - {new Date(visit.date).toLocaleDateString()} 
                    {(visit.registrations || 0) >= visit.capacity ? ' (Fully Booked)' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comments" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Comments or Questions
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows="4"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  fontSize: '16px',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>

            <button 
              type="submit" 
              style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.3s',
                marginTop: '10px'
              }}
            >
              Submit Registration
            </button>
          </form>
        )}
      </div>


    </div>
  );
}