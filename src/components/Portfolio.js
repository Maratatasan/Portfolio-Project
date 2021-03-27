import React from "react";
import MvcJsList from "../images/mvc-list.png";
import Countdown from "../images/countdown.png";
import expenses from "../images/expenses-app.png";
import toDoList from "../images/todolist.png";
import techStore from "../images/tech-store.png";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // MVC project -----------------------------------//
  const openMvcJsList = () => {
    const content = (
      <div className="popup-container">
        <img
          className="portfolio-image-popupbox"
          src={MvcJsList}
          alt="MVC JavaScript to do list Project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, odit.
          Alias libero, quibusdam culpa id ab eos reiciendis quaerat cumque!
        </p>
        <b>Demo : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://maratatasan.github.io/MVC-list/", "_blank")
          }
        >
          https://maratatasan.github.io/MVC-list/
        </a>
        <br />
        <b>GitHub : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Maratatasan/MVC-list", "_blank")
          }
        >
          https://github.com/Maratatasan/MVC-list
        </a>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigMvcJsList = {
    titleBar: {
      enable: true,
      text: "JavaScript MVC model/architecture to do list app project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Countdown react project ---------------------------///
  const openCountdown = () => {
    const content = (
      <div className="popup-container">
        <img
          className="portfolio-image-popupbox"
          src={Countdown}
          alt="React countdown Project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, odit.
          Alias libero, quibusdam culpa id ab eos reiciendis quaerat cumque!
        </p>
        <b>Demo : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://maratatasan.github.io/countdown/", "_blank")
          }
        >
          https://maratatasan.github.io/countdown/
        </a>
        <br />
        <b>GitHub : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Maratatasan/countdown", "_blank")
          }
        >
          https://github.com/Maratatasan/countdown
        </a>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCountdown = {
    titleBar: {
      enable: true,
      text: "React countdown app project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // expenses project ---------------------------///
  const openExpenses = () => {
    const content = (
      <div className="popup-container">
        <img
          className="portfolio-image-popupbox"
          src={expenses}
          alt="~JavaScript expenses App Project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, odit.
          Alias libero, quibusdam culpa id ab eos reiciendis quaerat cumque!
        </p>
        <b>Demo : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://maratatasan.github.io/expenses-app/", "_blank")
          }
        >
          https://maratatasan.github.io/expenses-app/
        </a>
        <br />
        <b>GitHub : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Maratatasan/expenses-app", "_blank")
          }
        >
          https://github.com/Maratatasan/expenses-app
        </a>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigExpenses = {
    titleBar: {
      enable: true,
      text: "JavaScript expenses app project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // toDoList project ---------------------------///
  const openToDoList = () => {
    const content = (
      <div className="popup-container">
        <img
          className="portfolio-image-popupbox"
          src={toDoList}
          alt="~JavaScript to do list App Project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, odit.
          Alias libero, quibusdam culpa id ab eos reiciendis quaerat cumque!
        </p>
        <b>Demo : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://maratatasan.github.io/todo-list-page/",
              "_blank"
            )
          }
        >
          https://maratatasan.github.io/todo-list-page/
        </a>
        <br />
        <b>GitHub : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Maratatasan/todo-list-page",
              "_blank"
            )
          }
        >
          https://github.com/Maratatasan/todo-list-page
        </a>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTodolist = {
    titleBar: {
      enable: true,
      text: "JavaScript to do list app project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // techStore project ---------------------------///
  const openTechStore = () => {
    const content = (
      <div className="popup-container">
        <img
          className="portfolio-image-popupbox"
          src={techStore}
          alt="HTML and CSS  Project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, odit.
          Alias libero, quibusdam culpa id ab eos reiciendis quaerat cumque!
        </p>
        <b>Demo : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://maratatasan.github.io/tech-storeF/", "_blank")
          }
        >
          https://maratatasan.github.io/tech-storeF/
        </a>
        <br />
        <b>GitHub : </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Maratatasan/tech-storeF", "_blank")
          }
        >
          https://github.com/Maratatasan/tech-storeF
        </a>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTechStore = {
    titleBar: {
      enable: true,
      text: "HTML and CSS Project....",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        {/* --  openMvcJsList  -- */}
        <div className="image-box-wrapper row justify-content-center ">
          <div className="portfolio-image-box" onClick={openMvcJsList}>
            <img
              src={MvcJsList}
              alt="MVC JavaScript to do list Project..."
              className="portfolio-image"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* --  openCountdown  -- */}

          <div className="portfolio-image-box" onClick={openCountdown}>
            <img
              src={Countdown}
              alt="React app countdown Project..."
              className="portfolio-image"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* --  openExpenses  -- */}

          <div className="portfolio-image-box" onClick={openExpenses}>
            <img
              src={expenses}
              alt="JavaScript expenses app Project..."
              className="portfolio-image"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* --  openToDoList  -- */}

          <div className="portfolio-image-box" onClick={openToDoList}>
            <img
              src={toDoList}
              alt="JavaScript to do list with local storage Project..."
              className="portfolio-image"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* -- openTechStore -- */}

          <div className="portfolio-image-box" onClick={openTechStore}>
            <img
              src={techStore}
              alt="html and css tech-store Project..."
              className="portfolio-image"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigMvcJsList} />
      <PopupboxContainer {...popupboxConfigCountdown} />
      <PopupboxContainer {...popupboxConfigExpenses} />
      <PopupboxContainer {...popupboxConfigTodolist} />
      <PopupboxContainer {...popupboxConfigTechStore} />
    </div>
  );
};

export default Portfolio;
