/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { Box, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useAddress, useWeb3Context } from "../../hooks/web3Context";

function TopBar({ setNotification }) {
  const dialog = useRef();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { connect, connected, disconnect } = useWeb3Context();
  const address = useAddress();

  let ellipsis = address
    ? (
        address.slice(0, 6) +
        "..." +
        address.substring(address.length - 5, address.length - 1)
      ).toLowerCase()
    : "Connect";

  useEffect(() => {
    document.addEventListener("mouseup", function (event) {
      if (dialog && dialog.current && !dialog.current.contains(event.target)) {
        setHamburgerOpen(false);
      }
    });
  }, []);

  function onConnect() {
    connect().then((msg) => {
      if (msg.type === "error") {
        setNotification(msg);
      }
    });
  }

  function calcDate() {
    let countDownDate = new Date("Sept 24, 2022 13:00:00").getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setDate(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  }
  const sm = useMediaQuery("(max-width : 992px)");

  const [date, setDate] = useState("");

  useEffect(() => {
    calcDate();
    setInterval(() => {
      calcDate();
    }, 1000);
  }, []);

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light navbar-95 "
      style={{ background: "#EE3EC9" }}
    >
      <a class="navbar-brand" href="#">
        <img src="/icons/computer-3.png" />{" "}
      </a>
      <Box display={"flex"} alignItems={"center"}>
        {sm ? (
          <ConnectButton
            onClick={() => (connected ? disconnect() : onConnect())}
          >
            {ellipsis}
          </ConnectButton>
        ) : (
          ""
        )}
        <button
          class={`navbar-toggler ${!hamburgerOpen ? "collapsed" : ""}`}
          type="button"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </Box>

      <div
        class={`${hamburgerOpen ? "show" : "collapse"} navbar-collapse`}
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="https://therabbles.io"
              target="_blank"
              rel="noreferrer"
            >
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              FAQ
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              RabblePass Countdown: {"<"} <span id="phase1">{date} </span> {">"}
            </a>
          </li>
        </ul>
      </div>
      {!sm ? (
        <ConnectButton onClick={() => (connected ? disconnect() : onConnect())}>
          {ellipsis}
        </ConnectButton>
      ) : (
        ""
      )}
    </nav>
  );
}

const ConnectButton = styled(Box)`
  margin-right: 20px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 7px 20px;
  cursor: pointer;
`;

export default TopBar;
