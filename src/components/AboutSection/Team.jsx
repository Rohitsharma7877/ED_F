import React from "react";
import "./team.css";

const team = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/duw27lpbe/image/upload/v1733395581/Vijay_bt068t.jpg",
    name: "Dr. Vijay",
    designation: "Radiology Department",
    description:"Dr. Vijay N. Raj, a distinguished radiologist with an MBBS from AIMS and DMRD/DNB from Manipal Hospital, excels in neuroimaging, musculoskeletal, and cross-sectional radiology. With over six years leading the Radiology Department in a multispecialty hospital, he has contributed to top institutions like Manipal and Apollo Hospitals and peer-reviewed publications. A member of IRIA, he is celebrated for his clinical precision and expertise.",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/duw27lpbe/image/upload/v1733394813/Mithun_s2henf.jpg",
    name: "Dr. Mithun",
    designation: "Radiology Department",
    description:"Dr. Mithun Somaiah C.S., Professor and HOD of Internal Medicine at BGS GIMS, is a visionary healthcare leader. As Managing Director of Leonis Gamma Healthcare Pvt. Ltd., he spearheads the installation, operations, and management of advanced CT/MRI facilities in reputed hospitals across Karnataka. With a commitment to excellence, he combines clinical expertise with strategic innovation to elevate healthcare standards.",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/duw27lpbe/image/upload/v1733395110/Prathiksha_llzepb.jpg",
    name: "Dr. Prateeksha",
    designation: "Radiology Department",
    description:"Dr. Pratheeksha H.K., a GOLD medalist and best outgoing postgraduate from SDM Medical College, is a skilled obstetrician and gynecologist. As a consultant at Sahyaadri Multispeciality Hospital, Hassan, she excels in surgeries, growth scans, and high-risk pregnancy care, combining academic excellence with compassionate care.",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dngcmfwpg/image/upload/v1733459755/Dr.Priyanka-removebg-preview_twwplv.png",
    name: "Dr. Priyanka",
    designation: "Radiology Department",
    description:"Dr. Priyanka Gowda C.D., a consultant dermatologist and dermato-surgeon with an MD from JSS Medical College, specializes in medical and surgical dermatology. Practicing at SSM Hospital, Hassan, she is a published researcher on psoriasis and a member of IADVL and ACIS, dedicated to advancing dermatological care.",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/duw27lpbe/image/upload/v1733395568/Preethy_h1orsk.jpg",
    name: "Dr. Preety",
    designation: "Radiology Department",
    description:"Mrs. Preety, founder and Managing Director, brings 17 years of expertise in software technology, automation, and agile development. Proficient in C, Python, Django, React Native, AWS, and more, she has led key projects for MNCs like Johnson & Johnson (CRM/ERP solutions), TCS (banking apps), and Accenture (Frankfurt Airport systems). Her specialization in software architecture and test-driven development sets her apart.",
  },
];

const Team = () => {
  return (
    <div className="main-container">
      <h1 className="team-texxt">Our Teams</h1>
      <div className="team-container1">
        <div className="team-grid">
          {team.map((item) => (
            <div key={item.id} className="flip-card">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="team-image"
                  />
                  <h2 className="team-title">{item.name}</h2>
                  <h3 className="team-designation">{item.designation}</h3>
                </div>

                {/* Back Side */}
                <div className="flip-card-back">
                  <p className="team-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
