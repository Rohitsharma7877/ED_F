import React from "react";
import "./expertAdvised.css";
import expert from './assests/ExpertAdvisedImage.jpg'

const ExpertAdvised = () => {
  return (
    <div className="beeEverything-main1">
      <div className="beeEverything-main2">
        <div className="beeEverything-box1">
          <div className="beeEverything-heading1">
            <div className="beeEverything-heading1-pargh">
              <p>We Help You</p>
            </div>
          </div>
          <div className="beeEverything-heading2">
            <div className="beeEverything-heading2-head">
              <h1>
              Expert-Uniquenes
              </h1>
            </div>
          </div>
          <div className="beeEverything-heading3">
            <div className="beeEverything-heading3-img">
              <img
                src={expert}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="beeEverything-box2">
          <div className="beeEverything-box2-heading">
          <h1 className='beeEverything-box2-heading-title'>Expert Advised</h1>
            <p>
              Becoming an expert in diagnostics requires sharp clinical
              reasoning, continuous learning, and staying updated with
              advancements in medical science. It involves thoroughly reviewing
              patient history, conducting detailed physical examinations, and
              interpreting test results with precision. Expert diagnosticians
              excel in creating comprehensive differential diagnoses, ensuring
              no condition is overlooked. Collaboration with specialists and
              awareness of cognitive biases are crucial to avoid errors and
              refine judgment. 
              
            </p>
            <br/>
            <h1 className='beeEverything-box2-heading-title'>Key aspects of expert diagnostics:</h1>
            
            {/* <br/> */}

            <p>
              Expert diagnostics involves the art of gathering and interpreting
              critical patient information with precision. It requires
              formulating and testing multiple diagnostic hypotheses while
              balancing clinical evidence and experience. Accurate
              decision-making stems from a blend of analytical reasoning,
              intuition, and continuous learning. Mastery in diagnostics ensures
              tailored solutions, leading to optimal patient outcomes.
            </p>
            <br />
            <h1 className='beeEverything-box2-heading-title'>Appropriate diagnostic tool usage:</h1>
            
            <p>
              Utilize laboratory tests, imaging studies, and other diagnostic
              modalities effectively. Understand the limitations of each test
              and interpret results accurately. Regularly review new research
              and guidelines in your field. Attend continuing medical education
              courses to stay current on diagnostic advancements.
            </p>
            {/* <br/>
                <h1>PERFORMANCE</h1>
                <br/>
                <p>
                Serving your strategy and ‘creation’ goals with action, and helping you achieve a 
                <br/>competitive advantage in the marketplace while attaining profitable growth.
                </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertAdvised;
