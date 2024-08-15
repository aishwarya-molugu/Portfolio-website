import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (index) => {
    setActiveModal(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <h3 className="services__title">Presentation Skills Training</h3>
          </div>

          <span className="services__button" onClick={() => toggleModal(1)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={`services__modal ${
              activeModal === 1 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleModal(null)}
              ></i>

              <h3 className="services__modal-title">
                Presentation Skills Training
              </h3>
              <p className="services__modal-description">
                Service with more than 8 years of experience
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Structure engaging presentation content.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Learn to maintain audience interest and attention.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Use visual aids and multimedia effectively.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Get personalized feedback for improvement.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Practice presentations in a supportive setting.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Repeat the above structure for other services, with different indexes */}
        {/* For Public Speaking Coaching */}
        <div className="services__content">
          <div>
            <h3 className="services__title">Public Speaking Coaching</h3>
          </div>

          <span className="services__button" onClick={() => toggleModal(2)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={`services__modal ${
              activeModal === 2 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleModal(null)}
              ></i>

              <h3 className="services__modal-title">
                Public Speaking Coaching
              </h3>
              <p className="services__modal-description">
                Service with more than 8 years of experience
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Build confidence and reduce speaking anxiety.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Improve vocal delivery and body language.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Tailor messages to diverse audiences.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Receive personalized coaching and feedback.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Enhance public speaking through practical exercises.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <h3 className="services__title">
              Interpersonal Communication Skills
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleModal(3)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={`services__modal ${
              activeModal === 3 ? "active-modal" : ""
            }`}
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleModal(null)}
              ></i>

              <h3 className="services__modal-title">
                Interpersonal Communication Skills
              </h3>
              <p className="services__modal-description">
                Service with more than 8 years of experience
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Improve active listening and empathy.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop better verbal and non-verbal communication.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Handle conflicts and difficult conversations effectively.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Build rapport and trust with colleagues and clients.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Enhance teamwork and collaboration skills.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
