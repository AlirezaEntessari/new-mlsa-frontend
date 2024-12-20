import React from "react";
import "./RatingsHomePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import LargeOrangeStarIcon from "../../assets/icons/LargeOrangeStar.svg";
import GirlWithLaptopStarsIcon from "../../assets/icons/girlwithlaptopstars.svg";
import ValuesCircleGraphic from "../../assets/logos/ValuesCircleGraphic.svg";
import { Link } from "react-router-dom";

export default function RatingsHomePage() {
  return (
    <div className="ratings-home-page">
      <HeaderWithProfilePic />
      <div className="ratings-home-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-home-page__right-container">
          <div className="ratings-home-page__mobile-container">
            <div className="ratings-home-page__mobile-header-container">
              <p className="ratings-home-page__mobile-header">
                Ratings & Feedback
              </p>
              <img
                className="ratings-home-page__mobile-mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Assurance Icon"
              />
            </div>
            <div className="ratings-home-page__mobile-button-container">
              <div className="ratings-home-page__mobile-top-button-container">
                <button className="ratings-home-page__mobile-rate-an-agency-button">
                  Rate an Agency
                </button>
                <Link to="/ratings-my-ratings-page">
                  <button className="ratings-home-page__mobile-my-ratings-button">
                    My Ratings
                  </button>
                </Link>
              </div>
              <div className="ratings-home-page__mobile-bottom-button-container">
                <button className="ratings-home-page__mobile-search-agencies-button">
                  Search Agencies
                </button>
                <Link to="/ratings-conflict-resolution-page">
                  <button className="ratings-home-page__mobile-conflict-resolution-button">
                    Conflict Resolution
                  </button>
                </Link>
              </div>
            </div>
            <p className="ratings-home-page__mobile-description-text">
              MLSA's value centered rating system is a transformative step that
              benefits both the company and prospective members. This system
              ensures that everyone who joins MLSA aligns with our core values
              of
              <span className="ratings-home-page__mobile-bolded-text">
                integrity, excellence, and collaboration.
              </span>
              By openly rating and showcasing these values, we foster a
              transparent and
              <span className="ratings-home-page__mobile-bolded-text">
                trust-filled community,
              </span>
              where members are recognized for their commitment to our shared
              principles. This not only enhances our internal culture but also
              <span className="ratings-home-page__mobile-bolded-text">
                attracts like-minded individuals
              </span>
              who are passionate about maintaining and upholding our standards.
              Ultimately, this values-based rating system creates a cohesive and
              motivated network,
              <span className="ratings-home-page__mobile-bolded-text">
                driving collective success
              </span>
              and reinforcing MLSA's reputation as a leader in ethical business
              practices.
            </p>
            <img
              className="ratings-home-page__mobile-values-circle-graphic"
              src={ValuesCircleGraphic}
              alt="Values Circle Graphic"
            />
            <div className="ratings-home-page__mobile-about-ratings-container">
              <p className="ratings-home-page__mobile-about-ratings-header">
                About Ratings
              </p>
              <p className="ratings-home-page__mobile-about-ratings-description">
                Ratings are given for the following 4 criteria from 1-5 Stars:
              </p>
              <div className="ratings-home-page__mobile-about-ratings-content-container">
                <div className="ratings-home-page__mobile-about-ratings-left-content-container">
                  <p className="ratings-home-page__mobile-about-ratings-communication">
                    Communication
                  </p>
                  <p className="ratings-home-page__mobile-about-ratings-professionalism">
                    Professionalism
                  </p>
                  <p className="ratings-home-page__mobile-about-ratings-payment-timeliness">
                    Payment Timeliness
                  </p>
                  <p className="ratings-home-page__mobile-about-ratings-resource-quality">
                    Resource Quality
                  </p>
                </div>
                <img
                  className="ratings-home-page__mobile-large-orange-star-icon"
                  src={LargeOrangeStarIcon}
                  alt="Large Orange Star Icon"
                />
              </div>
            </div>
            <div className="ratings-home-page__mobile-feedback-container">
              <p className="ratings-home-page__mobile-feedback-header">
                Feedback
              </p>
              <p className="ratings-home-page__mobile-feedback-description">
                The feedback you receive reflects your ability to perform an
                honest and transparent transaction. If you disagree with any
                feedback you receive, you may challenge it by disputing it.
              </p>
            </div>
            <div className="ratings-home-page__mobile-giving-feedback-container">
              <div className="ratings-home-page__mobile-giving-feedback-inner-container">
                <p className="ratings-home-page__mobile-giving-feedback-header">
                  Giving Feedback
                </p>
                <p className="ratings-home-page__mobile-giving-feedback-description">
                  When leaving feedback for an Agency, it's important to
                  <span className="ratings-home-page__mobile-bolded-text">
                    follow proper etiquette
                  </span>
                  to ensure it is both
                  <span className="ratings-home-page__mobile-bolded-text">
                    constructive and fair.
                  </span>
                  If you're pleased with your experience, a
                  <span className="ratings-home-page__mobile-bolded-text">
                    high-scoring rating is simple to provide
                  </span>
                  and greatly appreciated. However, if your experience was less
                  than satisfactory, we encourage you to first contact the
                  Agency and discuss this. If this action does not produce
                  positive results, detail your concerns in your feedback. When
                  you are giving feedback that is less than satisfactory, you
                  will be asked by MLSA to answer specific questions to help us
                  understand the issues you experienced. This process allows us
                  to thoroughly investigate any problems and take corrective
                  actions. Your thoughtful feedback is crucial for
                  <span className="ratings-home-page__mobile-bolded-text">
                    our ongoing improvement and commitment to excellence.
                  </span>
                </p>
              </div>
            </div>
            <div className="ratings-home-page__mobile-ratings-container">
              <p className="ratings-home-page__mobile-ratings-header">
                Ratings
              </p>
              <p className="ratings-home-page__mobile-ratings-description">
                Ratings are calculated by averaging scores across four key
                categories:
                <span className="ratings-home-page__mobile-bolded-text">
                  communication, professionalism, payment timeliness, and
                  resource quality.
                </span>
                Each of these categories reflects an important aspect of the
                service provided.
                <span className="ratings-home-page__mobile-bolded-text">
                  Communication
                </span>
                measures how effectively and clearly information is conveyed,
                while
                <span className="ratings-home-page__mobile-bolded-text">
                  professionalism
                </span>
                assesses the courtesy, respect, and competence shown throughout
                the interaction.
                <span className="ratings-home-page__mobile-bolded-text">
                  Payment Timeliness
                </span>
                captures the promptness and reliability of the service, and
                <span className="ratings-home-page__mobile-bolded-text">
                  Resource Quality
                </span>
                refers to the overall standard, suitability, and effectiveness
                of both an Agency's candidates and job roles. By averaging these
                scores, the rating provides a comprehensive measure of
                performance, helping to
                <span className="ratings-home-page__mobile-bolded-text">
                  ensure consistent quality and continuous improvement.
                </span>
              </p>
            </div>
            <img
              className="ratings-home-page__mobile-girl-with-laptop-stars-icon"
              src={GirlWithLaptopStarsIcon}
              alt="Girl With Laptop Stars Icon"
            />
            <div className="ratings-home-page__mobile-bottom-container">
              <div className="ratings-home-page__mobile-bottom-inner-container">
                <p className="ratings-home-page__mobile-bottom-container-description">
                  Ratings are at the core of the MLSA platform. They help
                  maintain and
                  <span className="ratings-home-page__mobile-bolded-text">
                    elevate our standards of service,
                  </span>
                  ensuring that only the best rise to the top. High ratings
                  highlight exceptional performance, allowing those who
                  consistently deliver outstanding service to be
                  <span className="ratings-home-page__mobile-bolded-text">
                    recognized and rewarded.
                  </span>
                  At the same time, constructive feedback identifies areas for
                  improvement, helping us to address any issues and
                  <span className="ratings-home-page__mobile-bolded-text">
                    enhance the overall member experience.
                  </span>
                  This process not only keeps Agencies accountable but also
                  ensures that our top performers are celebrated, driving
                  <span className="ratings-home-page__mobile-bolded-text">
                    all MLSA Members to consistently strive for excellence.
                  </span>
                  Your ratings are a key part of this ongoing pursuit,
                  benefiting both MLSA and our Members.
                </p>
              </div>
            </div>
            <p className="ratings-home-page__mobile-learn-more">
              Learn more about Ratings and Feedback
            </p>
          </div>
          <div className="ratings-home-page__tablet-container">
            <div className="ratings-home-page__tablet-header-container">
              <p className="ratings-home-page__tablet-header">
                Ratings & Feedback
              </p>
              <img
                className="ratings-home-page__tablet-mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <div className="ratings-home-page__tablet-button-container">
              <button className="ratings-home-page__tablet-rate-an-agency-button">
                Rate an Agency
              </button>
              <Link to="/ratings-my-ratings-page">
                <button className="ratings-home-page__tablet-my-ratings-button">
                  My Ratings
                </button>
              </Link>
              <button className="ratings-home-page__tablet-search-agencies-button">
                Search Agencies
              </button>
              <Link to="/ratings-conflict-resolution-page">
                <button className="ratings-home-page__tablet-conflict-resolution-button">
                  Conflict Resolution
                </button>
              </Link>
            </div>
            <p className="ratings-home-page__tablet-top-description-text">
              MLSA's value centered rating system is a transformative step that
              benefits both the company and prospective members. This system
              ensures that everyone who joins MLSA aligns with our core values
              of
              <span className="ratings-home-page__tablet-bolded-text">
                integrity, excellence, and collaboration.
              </span>
              By openly rating and showcasing these values, we foster a
              transparent and
              <span className="ratings-home-page__tablet-bolded-text">
                trust-filled community,
              </span>
              where members are recognized for their commitment to our shared
              principles. This not only enhances our internal culture but also
              <span className="ratings-home-page__tablet-bolded-text">
                attracts like-minded individuals
              </span>
              who are passionate about maintaining and upholding our standards.
              Ultimately, this values-based rating system creates a cohesive and
              motivated network,
              <span className="ratings-home-page__tablet-bolded-text">
                driving collective success
              </span>
              and reinforcing MLSA's reputation as a leader in ethical business
              practices.
            </p>
            <div className="ratings-home-page__tablet-central-container">
              <img
                className="ratings-home-page__tablet-values-circle-graphic"
                src={ValuesCircleGraphic}
                alt="Values Circle Graphic"
              />
              <div className="ratings-home-page__tablet-central-right-container">
                <div className="ratings-home-page__tablet-about-ratings-container">
                  <p className="ratings-home-page__tablet-about-ratings-header">
                    About Ratings
                  </p>
                  <p className="ratings-home-page__tablet-about-ratings-description">
                    Ratings are given for the following 4 criteria from 1-5
                    Stars:
                  </p>
                  <div className="ratings-home-page__tablet-about-ratings-content-container">
                    <div className="ratings-home-page__tablet-about-ratings-content-left-container">
                      <p className="ratings-home-page__tablet-about-ratings-communication">
                        Communication
                      </p>
                      <p className="ratings-home-page__tablet-about-ratings-professionalism">
                        Professionalism
                      </p>
                      <p className="ratings-home-page__tablet-about-ratings-payment-timeliness">
                        Payment Timeliness
                      </p>
                      <p className="ratings-home-page__tablet-about-ratings-resource-quality">
                        Resource Quality
                      </p>
                    </div>
                    <img
                      className="ratings-home-page__tablet-large-orange-star-icon"
                      src={LargeOrangeStarIcon}
                      alt="Large Orange Star Icon"
                    />
                  </div>
                </div>
                <div className="ratings-home-page__tablet-feedback-container">
                  <p className="ratings-home-page__tablet-feedback-header">
                    Feedback
                  </p>
                  <p className="ratings-home-page__tablet-feedback-description">
                    The feedback you receive reflects your ability to perform an
                    honest and transparent transaction. If you disagree with any
                    feedback you receive, you may challenge it by disputing it.
                  </p>
                </div>
              </div>
            </div>
            <div className="ratings-home-page__tablet-giving-feedback-container">
              <div className="ratings-home-page__tablet-giving-feedback-inner-container">
                <p className="ratings-home-page__tablet-giving-feedback-header">
                  Giving Feedback
                </p>
                <p className="ratings-home-page__tablet-giving-feedback-description">
                  When leaving feedback for an Agency, it's important to
                  <span className="ratings-home-page__tablet-bolded-text">
                    follow proper etiquette
                  </span>
                  to ensure it is both
                  <span className="ratings-home-page__tablet-bolded-text">
                    constructive and fair.
                  </span>
                  If you're pleased with your experience, a
                  <span className="ratings-home-page__tablet-bolded-text">
                    high-scoring rating is simple to provide
                  </span>
                  and greatly appreciated. However, if your experience was less
                  than satisfactory, we encourage you to first contact the
                  Agency and discuss this. If this action does not produce
                  positive results, detail your concerns in your feedback. When
                  you are giving feedback that is less than satisfactory, you
                  will be asked by MLSA to answer specific questions to help us
                  understand the issues you experienced. This process allows us
                  to thoroughly investigate any problems and take corrective
                  actions. Your thoughtful feedback is crucial for
                  <span className="ratings-home-page__tablet-bolded-text">
                    our ongoing improvement and commitment to excellence.
                  </span>
                </p>
              </div>
            </div>
            <div className="ratings-home-page__tablet-ratings-container">
              <p className="ratings-home-page__tablet-ratings-header">
                Ratings
              </p>
              <p className="ratings-home-page__tablet-ratings-description">
                Ratings are calculated by averaging scores across four key
                categories:
                <span className="ratings-home-page__tablet-bolded-text">
                  communication, professionalism, payment timeliness, and
                  resource quality.
                </span>
                Each of these categories reflects an important aspect of the
                service provided.
                <span className="ratings-home-page__tablet-bolded-text">
                  Communication
                </span>
                measures how effectively and clearly information is conveyed,
                while
                <span className="ratings-home-page__tablet-bolded-text">
                  professionalism
                </span>
                assesses the courtesy, respect, and competence shown throughout
                the interaction.
                <span className="ratings-home-page__tablet-bolded-text">
                  Payment Timeliness
                </span>
                captures the promptness and reliability of the service, and
                <span className="ratings-home-page__tablet-bolded-text">
                  Resource Quality
                </span>
                refers to the overall standard, suitability, and effectiveness
                of both an Agency's candidates and job roles. By averaging these
                scores, the rating provides a comprehensive measure of
                performance, helping to
                <span className="ratings-home-page__tablet-bolded-text">
                  ensure consistent quality and continuous improvement.
                </span>
              </p>
            </div>
            <img
              className="ratings-home-page__tablet-girl-with-laptop-stars-icon"
              src={GirlWithLaptopStarsIcon}
              alt="Girl With Laptop Stars Icon"
            />
            <div className="ratings-home-page__tablet-bottom-container">
              <div className="ratings-home-page__tablet-bottom-inner-container">
                <p className="ratings-home-page__tablet-bottom-inner-container-description">
                  Ratings are at the core of the MLSA platform. They help
                  maintain and
                  <span className="ratings-home-page__tablet-bolded-text">
                    elevate our standards of service,
                  </span>
                  ensuring that only the best rise to the top. High ratings
                  highlight exceptional performance, allowing those who
                  consistently deliver outstanding service to be
                  <span className="ratings-home-page__tablet-bolded-text">
                    recognized and rewarded.
                  </span>
                  At the same time, constructive feedback identifies areas for
                  improvement, helping us to address any issues and
                  <span className="ratings-home-page__tablet-bolded-text">
                    enhance the overall member experience.
                  </span>
                  This process not only keeps Agencies accountable but also
                  ensures that our top performers are celebrated, driving
                  <span className="ratings-home-page__tablet-bolded-text">
                    all MLSA Members to consistently strive for excellence.
                  </span>
                  Your ratings are a key part of this ongoing pursuit,
                  benefiting both MLSA and our Members.
                </p>
              </div>
            </div>
            <p className="ratings-home-page__tablet-learn-more">
              Learn more about Ratings and Feedback
            </p>
          </div>
          <div className="ratings-home-page__desktop-container">
            <p className="ratings-home-page__desktop-header">
              Ratings & Feedback
            </p>
            <div className="ratings-home-page__desktop-top-container">
              <div className="ratings-home-page__desktop-button-container">
                <button className="ratings-home-page__desktop-rate-an-agency-button">
                  Rate an Agency
                </button>
                <Link to="/ratings-my-ratings-page">
                  <button className="ratings-home-page__desktop-my-ratings-button">
                    My Ratings
                  </button>
                </Link>
                <button className="ratings-home-page__desktop-search-agencies-button">
                  Search Agencies
                </button>
                <Link to="/ratings-conflict-resolution-page">
                  <button className="ratings-home-page__desktop-conflict-resolution-button">
                    Conflict Resolution
                  </button>
                </Link>
              </div>
              <img
                className="ratings-home-page__desktop-mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-home-page__desktop-top-description-text">
              MLSA's value centered rating system is a transformative step that
              benefits both the company and prospective members. This system
              ensures that everyone who joins MLSA aligns with our core values
              of
              <span className="ratings-home-page__desktop-bolded-text">
                integrity, excellence, and collaboration.
              </span>
              By openly rating and showcasing these values, we foster a
              transparent and
              <span className="ratings-home-page__desktop-bolded-text">
                trust-filled community,
              </span>
              where members are recognized for their commitment to our shared
              principles. This not only enhances our internal culture but also
              <span className="ratings-home-page__desktop-bolded-text">
                attracts like-minded individuals
              </span>
              who are passionate about maintaining and upholding our standards.
              Ultimately, this values-based rating system creates a cohesive and
              motivated network,
              <span className="ratings-home-page__desktop-bolded-text">
                driving collective success
              </span>
              and reinforcing MLSA's reputation as a leader in ethical business
              practices.
            </p>
            <div className="ratings-home-page__desktop-central-container">
              <img
                className="ratings-home-page__desktop-values-circle-graphic"
                src={ValuesCircleGraphic}
                alt="Values Circle Graphic"
              />
              <div className="ratings-home-page__desktop-central-right-container">
                <div className="ratings-home-page__desktop-about-ratings-container">
                  <p className="ratings-home-page__desktop-about-ratings-header">
                    About Ratings
                  </p>
                  <p className="ratings-home-page__desktop-about-ratings-description">
                    Ratings are given for the following 4 criteria from 1-5
                    Stars:
                  </p>
                  <div className="ratings-home-page__desktop-about-ratings-content-container">
                    <div className="ratings-home-page__desktop-about-ratings-content-left-container">
                      <p className="ratings-home-page__desktop-about-ratings-communication">
                        Communication
                      </p>
                      <p className="ratings-home-page__desktop-about-ratings-professionalism">
                        Professionalism
                      </p>
                      <p className="ratings-home-page__desktop-about-ratings-payment-timeliness">
                        Payment Timeliness
                      </p>
                      <p className="ratings-home-page__desktop-about-ratings-resource-quality">
                        Resource Quality
                      </p>
                    </div>
                    <img
                      className="ratings-home-page__desktop-large-orange-star-icon"
                      src={LargeOrangeStarIcon}
                      alt="Large Orange Star Icon"
                    />
                  </div>
                  <div className="ratings-home-page__desktop-feedback-container">
                    <p className="ratings-home-page__desktop-feedback-header">
                      Feedback
                    </p>
                    <p className="ratings-home-page__desktop-feedback-description">
                      The feedback you receive reflects your ability to perform
                      an honest and transparent transaction. If you disagree
                      with any feedback you receive, you may challenge it by
                      disputing it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ratings-home-page__desktop-giving-feedback-container">
              <div className="ratings-home-page__desktop-giving-feedback-inner-container">
                <p className="ratings-home-page__desktop-giving-feedback-header">
                  Giving Feedback
                </p>
                <p className="ratings-home-page__desktop-giving-feedback-description">
                  When leaving feedback for an Agency, it's important to
                  <span className="ratings-home-page__desktop-bolded-text">
                    follow proper etiquette
                  </span>
                  to ensure it is both
                  <span className="ratings-home-page__desktop-bolded-text">
                    constructive and fair.
                  </span>
                  If you're pleased with your experience, a
                  <span className="ratings-home-page__desktop-bolded-text">
                    high-scoring rating is simple to provide
                  </span>
                  and greatly appreciated. However, if your experience was less
                  than satisfactory, we encourage you to first contact the
                  Agency and discuss this. If this action does not produce
                  positive results, detail your concerns in your feedback. When
                  you are giving feedback that is less than satisfactory, you
                  will be asked by MLSA to answer specific questions to help us
                  understand the issues you experienced. This process allows us
                  to thoroughly investigate any problems and take corrective
                  actions. Your thoughtful feedback is crucial for
                  <span className="ratings-home-page__desktop-bolded-text">
                    our ongoing improvement and commitment to excellence.
                  </span>
                </p>
              </div>
            </div>
            <div className="ratings-home-page__desktop-ratings-container">
              <div className="ratings-home-page__desktop-ratings-left-container">
                <p className="ratings-home-page__desktop-ratings-header">
                  Ratings
                </p>
                <p className="ratings-home-page__desktop-ratings-description">
                  Ratings are calculated by averaging scores across four key
                  categories:
                  <span className="ratings-home-page__desktop-bolded-text">
                    communication, professionalism, payment timeliness, and
                    resource quality.
                  </span>
                  Each of these categories reflects an important aspect of the
                  service provided.
                  <span className="ratings-home-page__desktop-bolded-text">
                    Communication
                  </span>
                  measures how effectively and clearly information is conveyed,
                  while
                  <span className="ratings-home-page__desktop-bolded-text">
                    professionalism
                  </span>
                  assesses the courtesy, respect, and competence shown
                  throughout the interaction.
                  <span className="ratings-home-page__desktop-bolded-text">
                    Payment Timeliness
                  </span>
                  captures the promptness and reliability of the service, and
                  <span className="ratings-home-page__desktop-bolded-text">
                    Resource Quality
                  </span>
                  refers to the overall standard, suitability, and effectiveness
                  of both an Agency's candidates and job roles. By averaging
                  these scores, the rating provides a comprehensive measure of
                  performance, helping to
                  <span className="ratings-home-page__desktop-bolded-text">
                    ensure consistent quality and continuous improvement.
                  </span>
                </p>
              </div>
              <img
                className="ratings-home-page__desktop-girl-with-laptop-stars-icon"
                src={GirlWithLaptopStarsIcon}
                alt="Girl With Laptop Stars Icon"
              />
            </div>
            <div className="ratings-home-page__desktop-bottom-container">
              <div className="ratings-home-page__desktop-bottom-inner-container">
                <p className="ratings-home-page__desktop-bottom-inner-container-description">
                  Ratings are at the core of the MLSA platform. They help
                  maintain and
                  <span className="ratings-home-page__desktop-bolded-text">
                    elevate our standards of service,
                  </span>
                  ensuring that only the best rise to the top. High ratings
                  highlight exceptional performance, allowing those who
                  consistently deliver outstanding service to be
                  <span className="ratings-home-page__desktop-bolded-text">
                    recognized and rewarded.
                  </span>
                  At the same time, constructive feedback identifies areas for
                  improvement, helping us to address any issues and
                  <span className="ratings-home-page__desktop-bolded-text">
                    enhance the overall member experience.
                  </span>
                  This process not only keeps Agencies accountable but also
                  ensures that our top performers are celebrated, driving
                  <span className="ratings-home-page__desktop-bolded-text">
                    all MLSA Members to consistently strive for excellence.
                  </span>
                  Your ratings are a key part of this ongoing pursuit,
                  benefiting both MLSA and our Members.
                </p>
              </div>
            </div>
            <p className="ratings-home-page__desktop-learn-more">
              Learn more about Ratings and Feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
