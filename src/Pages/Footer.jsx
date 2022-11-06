import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Shop Mart</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              {/* <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form> */}
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <a
                    href="https://www.instagram.com/suraj.28_11/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/suraj-yadav-01752b222/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/sarry7045"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100010635822203"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="mailto: sarry7045@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiFillMail className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 7977368668</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column Reserved ">
              <p>
                {new Date().getFullYear()} | All Rights Reserved | Created by
                <a
                  style={{ color: "rgb(98 84 243)" }}
                  href="https://surajyadav.vercel.app/"
                  target="_blank"
                >
                  {" "}
                  Suraj Yadav
                </a>
              </p>
              {/* <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div> */}
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 0.9rem;
        border-radius: 50%;
        border: 1.5px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    }
    footer {
      padding: 6rem 0 6rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
