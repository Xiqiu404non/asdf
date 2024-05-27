import React from "react";
import "./style.css";
import { FaLine, FaInstagram, FaEnvelope } from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.line && (
          <li>
            <a href={socialprofils.line}>
              <FaLine />
            </a>
          </li>
        )}
        {socialprofils.gmail && (
          <li>
            <a href={socialprofils.gmail}>
              <FaEnvelope />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};

