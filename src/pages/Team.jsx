import React from 'react'
import chair1 from '../assets/chair1.jpg'
import chair2 from '../assets/chair2.png'
import chair3 from '../assets/chair3.jpg'
import chair4 from '../assets/chair4.jpg'
import arulsir from '../assets/arulsir.png'
import beemsir from '../assets/beemsir.jpg'

export default function Team(){
  const facultyMembers = [
    { name: 'Dr. M John Basha', role: 'Assistant Professor CSE', image: '/assets/faculty-1.jpg'},
    { name: 'Dr. Sowmya M S', role: 'Assistant Professor CSE', image: '/assets/faculty-2.jpg'},
    { name: 'Ms. Agashini V. Kumar', role: 'Assistant Professor CSE', image: '/assets/faculty-3.jpg'},
    { name: 'Ms. Savitha R', role: 'Assistant Professor EEE', image: '/assets/faculty-4.jpg'},
    ];

  const honourableMembers = [

    { name: 'Prof. Anjula Gurtoo', role: 'Honorary chair of GRI and Professor & Chair, Lab for Sustainable Solutions Department of Management Studies, Indian Institute of Science, Bangalore', image: chair4 },
    { name: 'Dr. K. Elangovan ', role: 'Honorary Member of GRI and Assistant Innovation Director, Innovation Cell Ministry of Education', image: chair1 },
    { name: 'Dr. Gurubalan Annadurai ', role: 'Honorary Member of GRI and Assistant Professor, Department of Energy Science and Engineering(IIT Bombay)', image: chair2 },
    { name: 'Mr. K. S. Rajamanokar ', role: 'Honorary Member of GRI and CEO of Aquaconnect, Chennai', image: chair3 },
    { name: 'Dr.M. Arul Prakasajothi', role: 'Chair Member and Director – Innovation, JAIN University', image: arulsir },
    { name: 'Dr.N. Beemkumar', role: 'Co-Chair Member and Deputy Dean (Research), JAIN University', image: beemsir },
  ];



  return (
    <div className="team-container">
      <div className="section-heading" style={{textAlign: 'center'}}>
        <div>
          <small>People</small>
          <h2>Our Team</h2>
        </div>
      </div>

      {/* Honourable Members Section */}
      <div className="honourable-section">
        <h3>Our Mentors</h3>

        <div className="honourable-grid">
          {honourableMembers.map((member, index) => (
            <div key={index} className="honourable-card">
              <div className="honourable-color-bar"></div>
              <div className="honourable-content">
                <div className="honourable-avatar">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span style="font-size: 28px; font-weight: bold; color: var(--brand);">${member.name.charAt(0)}</span>`;
                    }}
                  />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Section */}
      <div className="faculty-section">
        <h3>Faculty Members</h3>

        <div className="faculty-grid">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="faculty-card">
              <div className="faculty-color-bar"></div>
              <div className="faculty-content">
                <div className="faculty-avatar">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span style="font-size: 28px; font-weight: bold; color: var(--brand);">${faculty.name.charAt(0)}</span>`;
                    }}
                  />
                </div>
                <h4>{faculty.name}</h4>
                <p>{faculty.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
