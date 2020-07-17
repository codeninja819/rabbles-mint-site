/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Footer = () => {
  return (
    <footer class="taskbar">
      <div class="row" style={{ marginRight: 0 }}>
        <div class="col-8">
          <a
            href="https://jacylabs.com"
            class="btn start-button"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/users-1.png" class="icon-16" />
            jacylabs
          </a>
        </div>
        <div class="col-4 time">&copy; 2022 jacylabs, LLC</div>
      </div>
    </footer>
  );
};

export default Footer;
