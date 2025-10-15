import React from 'react'

export default function Team(){
  const facultyMembers = [
    { name: 'Dr.N.Beemkumar', role: 'Deputy Dean(R&D)' },
    { name: 'Dr.M.Arul Prakasajothi', role: 'Ditector-Innovation (FET-JU)' },
    { name: 'Dr.L.Jawahar Nesan', role: 'Chief Mentor' },
    { name: 'Dr.Sowmya M S', role: 'Assistant Professor CSE'},
    { name: 'Ms.Savitha R', role: 'Assistant Professor EEE'},
    { name: 'Ms.Agashini V. Kumar', role: 'Assistant Professor CSE'},
    { name: 'Ms.Vichitra M ', role: 'Assistant Professor Civil'},
    { name: 'MrAnanda V.M', role: 'Technical Staff CSE' },
    { name: 'Mr.Chandra .C', role: 'Teachnical staff ISE' },

  ];

  const studentMembers = [
    { name: 'Dharmanshoo Chopra', role: 'Student Researcher' },
    { name: 'K. Mokshitha', role: 'Student Researcher' },
    { name: 'Sreeja Saha', role: 'Student Researcher' },
    { name: 'M.G. Prasanna Sai Aaradhya', role: 'Student Researcher' },
    { name: 'S Jayavardhan', role: 'Student Researcher' },
    { name: 'Busireddy Kylash Reddy', role: 'Student Researcher' },
    { name: 'Adithya Gowda', role: 'Student Researcher' },
    { name: 'Kanishka J', role: 'Student Researcher' },
    { name: 'Sarika G Pawar', role: 'Student Researcher' },
    { name: 'Sri Kumar', role: 'Student Researcher' },
    { name: 'Navaraj Ashokan', role: 'Student Researcher' },
    { name: 'Akhilesh Reddy', role: 'Student Researcher' },
    { name: 'Voletee Kushal', role: 'Student Researcher' },
    { name: 'Shree Dharsan', role: 'Student Researcher' },
    { name: 'N. Susanth Koushik', role: 'Student Researcher' },
    { name: 'Raaga Sreshta', role: 'Student Researcher' },
    { name: 'SHAARUKESH G V', role: 'Student Researcher' },
   { name: 'Rifah Alam', role: 'Student Researcher' },
    { name: 'Gooty Kummara Snigdha', role: 'Student Researcher' },
    { name: 'Dharshan S', role: 'Student Researcher' },
    { name: 'Navya S', role: 'Student Researcher' },
    { name: 'P. Pragalath Gnanam', role: 'Student Researcher' },
    { name: 'Abhishek Kumar Pandey', role: 'Student Researcher' },
    { name: 'V Kusuma', role: 'Student Researcher' },
    { name: 'Jayashree B B', role: 'Student Researcher' },
  ];

  return (
    <div className="team-container" style={{padding: '20px 0'}}>
      <div className="section-heading" style={{textAlign:'center', justifyContent:'center', marginBottom: '40px'}}>
        <div>
          <small style={{color:'var(--muted)'}}>People</small>
          <h2>Our Team</h2>
        </div>
      </div>

      {/* Faculty Section */}
      <div className="faculty-section" style={{marginBottom: '60px'}}>
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
        }}>Faculty Members</h3>
        
        <div className="faculty-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          margin: '0 auto',
          maxWidth: '1200px'
        }}>
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="faculty-card" style={{
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 1
            }}>
              <div className="faculty-color-bar" style={{
                height: '8px',
                background: 'var(--primary)',
                width: '100%'
              }}></div>
              <div className="faculty-content" style={{padding: '25px 20px', textAlign: 'center'}}>
                <div className="faculty-avatar" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: 'var(--primary)'
                }}>
                  {faculty.name.charAt(0)}
                </div>
                <h4 style={{margin: '0 0 5px', fontSize: '20px', fontWeight: '600'}}>{faculty.name}</h4>
                <p style={{margin: '0', color: 'var(--muted)', fontSize: '16px'}}>{faculty.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Students Section */}
      <div className="students-section">
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
        }}>Student Members</h3>
        
        <div className="students-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          margin: '0 auto',
          maxWidth: '1200px'
        }}>
          {studentMembers.map((student, index) => (
            <div key={index} className="student-card" style={{
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              position: 'relative',
              padding: '20px 15px',
              textAlign: 'center',
              border: '1px solid #eaeaea'
            }}>
              <div className="student-initials" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `hsl(${index * 10 % 360}, 70%, 80%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: `hsl(${index * 10 % 360}, 70%, 30%)`
              }}>
                {student.name.split(' ').map(n => n.charAt(0)).join('')}
              </div>
              <h4 style={{
                margin: '0 0 5px', 
                fontSize: '16px', 
                fontWeight: '500',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>{student.name}</h4>
              <p style={{
                margin: '0', 
                color: 'var(--muted)', 
                fontSize: '14px'
              }}>{student.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
