import React from "react";

const SocialNetworks = () => {
  return (
    <div className="social-networks-container">
      <ul>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i class="fab fa-facebook"></i>{" "}
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i class="fab fa-instagram"></i>{" "}
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i class="fab fa-twitter"></i>{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialNetworks;
