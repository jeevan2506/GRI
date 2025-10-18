import React from 'react'

export default function Team(){
  const facultyMembers = [
    { name: 'Dr. Sowmya M S', role: 'Assistant Professor CSE', image: '/src/assets/faculty-4.jpg'},
    { name: 'Ms. Savitha R', role: 'Assistant Professor EEE', image: '/src/assets/faculty-5.jpg'},
    { name: 'Ms. Agashini V. Kumar', role: 'Assistant Professor CSE', image: '/src/assets/faculty-6.jpg'},
    { name: 'Ms. Vichitra M ', role: 'Assistant Professor Civil', image: '/src/assets/faculty-7.jpg'},
    { name: 'Mr. Ananda V.M', role: 'Technical Staff CSE', image: '/src/assets/faculty-8.jpg' },
    { name: 'Mr. Chandra .C', role: 'Technical Staff ISE', image: '/src/assets/faculty-9.jpg' },
  ];

  const honourableMembers = [
    
    { name: 'Dr. K. Elangovan ', role: 'Assistant Innovation Director, Innovation Cell Ministry of Education', image: '/src/assets/chair1.jpg' },
    { name: 'Dr. Gurubalan Annadurai ', role: 'Assistant Professor, Department of Energy Science and Engineering(IIT Bombay)', image: '/src/assets/chair2.png' },
    { name: 'Mr. K. S. Rajamanokar ', role: 'CEO of Aquaconnect, Chennai', image: '/src/assets/chair3.jpg' },
    { name: 'Dr.M. Arul Prakasajothi', role: 'Chair Member and Director – Innovation, JAIN University', image: '/src/assets/arulsir.png' },
    { name: 'Dr.N. Beemkumar', role: 'Co-Chair Member and Deputy Dean (Research), JAIN University', image: '/src/assets/beemsir.jpg' },
    
  ];



  return (
    <div className="team-container">
      <div className="section-heading">
        <div>
          <small>People</small>
          <h2>Our Team</h2>
        </div>
      </div>

      {/* Honourable Members Section */}
      <div className="honourable-section">
        <h3>Our Honourable Members</h3>

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
