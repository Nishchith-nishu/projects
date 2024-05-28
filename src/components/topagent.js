import React from 'react';
// import './AgentCard.css';

const AgentCard = () => {
  return (
    <div className="agent-card">
      <div className="agent-card-left">
        <img
          src="https://img.staticmb.com/mbimages/topagent/Profile-1-27283004_200_200.jpg"
          alt="Karthikeyan"
          className="agent-card-profile"
        />
      </div>
      <div className="agent-card-info">
        <h2 className="agent-card-name">Karthikeyan</h2>
        <p className="agent-card-company">MY Dwelling, Agrahara Badavane, Bangalore</p>
        <p className="agent-card-rera">RERA ID: PRM/KA/RERA/1251/309/PR/190616/003624 | Operating since: 2001</p>
        <div className="agent-card-stats">
          <div className="agent-card-stat">
            <p>34</p>
            <p>Properties For Sale</p>
          </div>
          <div className="agent-card-stat">
            <p>16</p>
            <p>Properties For Rent</p>
          </div>
          <div className="agent-card-stat">
            <p>6</p>
            <p>Deals Closed</p>
          </div>
          <div className="agent-card-stat">
            <p>3000</p>
            <p>Team Members</p>
          </div>
        </div>
        <p className="agent-card-about">
          <strong>About Agent:</strong> Karthikeyan is a passionate real estate consultant obsessed with client requirements and matching them to the best properties.
        </p>
        <p className="agent-card-deals">
          <strong>Deals in:</strong> Rent/Lease, Original Booking, Resale, Others
        </p>
        <p className="agent-card-areas">
          <strong>Areas:</strong> Prakruthi Nagar Kogilu, Thanisandra, Sonnathammanahalli...
        </p>
      </div>
      <div className="agent-card-right">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIvfJ4OGOn8XvOm2VSBm0x6PQmEcLSVZYF13vstzv90YXJCpUV"
          alt="Preferred Agent"
          className="agent-card-badge"
        />
        <a href="#" className="agent-card-btn">Contact Agent</a>
        <a href="#" className="agent-card-btn-outlined">View Details</a>
      </div>
    </div>
  );
};

export default AgentCard;
