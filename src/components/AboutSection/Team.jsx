import React from "react";
import "./team.css";

const team = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/duw27lpbe/image/upload/v1733395581/Vijay_bt068t.jpg",
    name: "Dr. Vijay",
    designation: "Radiology Department",
    description:"Dr. Vijay N. Raj, a distinguished radiologist with an MBBS from AIMS and DMRD/DNB from Manipal Hospital, ",
  },
  // {
  //   id: 2,
  //   image:
  //     "https://res.cloudinary.com/duw27lpbe/image/upload/v1733394813/Mithun_s2henf.jpg",
  //   name: "Dr. Mithun",
  //   designation: "Radiology Department",
  //   description:"Dr. Mithun Somaiah C.S., Professor and HOD of Internal Medicine at BGS GIMS, is a visionary healthcare leader. As Managing Director of Leonis Gamma Healthcare Pvt. Ltd., he spearheads the installation, operations, and management of advanced CT/MRI facilities in reputed hospitals across Karnataka. With a commitment to excellence, he combines clinical expertise with strategic innovation to elevate healthcare standards.",
  // },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/duw27lpbe/image/upload/v1733395110/Prathiksha_llzepb.jpg",
    name: "Dr. Prateeksha",
    designation: "Obstetrics & Gynecologist Department",
    description:"Dr. Pratheeksha H.K., a GOLD medalist and best outgoing postgraduate from SDM Medical College, is a skilled obstetrician and gynecologist. ",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dngcmfwpg/image/upload/v1733459755/Dr.Priyanka-removebg-preview_twwplv.png",
    name: "Dr. Priyanka",
    designation: "Dermatology Department",
    description:"Dr. Priyanka Gowda C.D., a consultant dermatologist and dermato-surgeon with an MD from JSS Medical College, specializes in medical and surgical dermatology. ",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/duw27lpbe/image/upload/v1733395568/Preethy_h1orsk.jpg",
    name: "Mrs. Preety",
    designation: " Managing Department",
    description:"Mrs. Preety, founder and Managing Director, brings 17 years of expertise in software technology, automation, and agile development. ",
  },
];

const Team = () => {
  return (
    <div className="team-wrapper">
      <h2 className="team-heading">Meet The Team</h2>
      <div className="team-cards">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="card-bar"></div>
            <img src={member.image} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.designation}</p>
            <p className="team-desc">{member.description}</p>
          </div>
        ))}
      </div>
      <p className="team-credit">
        Image for <a href="https://www.expertdiagnostics.com" target="_blank" rel="noreferrer">Expert</a>
      </p>
    </div>

  );
};

export default Team;
