import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 2px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        className="navbar"
      >
        <h2 style={{ fontSize: "3.3rem" }} className="common-heading">
          Contact page
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.48594803727!2d72.84173861429778!3d19.130194455239327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e11c58ae97%3A0xe078fd6042296f45!2sYagnik%20Nagar%20Football%20Ground!5e0!3m2!1sen!2sin!4v1664795054978!5m2!1sen!2sin"
          width="98%"
          height="450"
          style={{ border: 10 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xyyvjwqz"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                placeholder="user name"
                name="username"
                value={isAuthenticated ? user.name : ""}
                required
                autoComplete="off"
              />

              <input
                type="email"
                name="Email"
                value={isAuthenticated ? user.email : ""}
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                name="Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder="Enter your message"
              ></textarea>

              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Contact;
