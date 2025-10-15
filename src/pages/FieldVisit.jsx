import React, { useState, useEffect } from 'react';
import { database } from '../firebase/config';
import { ref, onValue } from 'firebase/database';
import { homeImages } from '../assets/galleryData'


export default function FieldVisit() {
  const [futureVisits, setFutureVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  // Past visit you want to show
  const pastVisits = [
    {
      title: "Devarakaggalahalli Village Visit",
      date: "2025-09-27",
      location: "Devarakaggalahalli, Karnataka",
      description: "We explored Raggi cultivation, Silk Worms production, and Flower production practices.",
      image: "homeImages.IMG_1654" 
    }
  ];

  useEffect(() => {
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

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Loading field visits...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <small style={{ color: 'var(--muted)' }}>Experiences</small>
        <h2>Field Visits</h2>
        <p style={{ maxWidth: '600px', margin: '10px auto' }}>
          Join our immersive field visits to rural communities and innovation centers.
          Experience firsthand the challenges and opportunities in rural development.
        </p>
      </div>

      {/* Future Visits */}
      <div style={{ marginBottom: '60px' }}>
        <h3 style={{
          textAlign: 'center',
          fontSize: '28px',
          marginBottom: '30px',
          borderBottom: '2px solid var(--primary)',
          display: 'inline-block',
          paddingBottom: '10px'
        }}>
          Upcoming Field Visits
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          margin: '0 auto',
          maxWidth: '1200px'
        }}>
          {futureVisits.length > 0 ? futureVisits.map((visit, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '180px',
                backgroundImage: `url(${visit.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ padding: '20px' }}>
                <div style={{
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  marginBottom: '10px',
                  display: 'inline-block'
                }}>
                  {new Date(visit.date).toLocaleDateString()}
                </div>
                <h4>{visit.title}</h4>
                <p><strong>Location:</strong> {visit.location}</p>
                <p>{visit.description}</p>
                <button style={{
                  marginTop: '15px',
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Register
                </button>
              </div>
            </div>
          )) : (
            <div style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
              <h4>No upcoming field visits scheduled.</h4>
              <p>Please check back later.</p>
            </div>
          )}
        </div>
      </div>

      {/* Past Visit Section */}
      <div style={{ marginBottom: '60px' }}>
        <h3 style={{
          textAlign: 'center',
          fontSize: '28px',
          marginBottom: '30px',
          borderBottom: '2px solid var(--primary)',
          display: 'inline-block',
          paddingBottom: '10px'
        }}>
          Past Field Visits
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          margin: '0 auto',
          maxWidth: '1200px'
        }}>
          {pastVisits.map((visit, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '180px',
                backgroundImage: `url(${visit.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ padding: '20px' }}>
                <div style={{
                  background: 'gray',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  marginBottom: '10px',
                  display: 'inline-block'
                }}>
                  {new Date(visit.date).toLocaleDateString()}
                </div>
                <h4>{visit.title}</h4>
                <p><strong>Location:</strong> {visit.location}</p>
                <p>{visit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
