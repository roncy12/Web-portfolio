import React from 'react'
// import './experience.css'
// import {BsShieldFillCheck} from 'react-icons/bs'
// import { BsFiletypeScss } from "react-icons/bs"
import {FaHtml5} from "react-icons/fa"
import {FaCss3Alt} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io5"
import {FaBootstrap} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
// import {BsFiletypeScss} from "react-icons/bs"
import { SiBigcommerce } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPagespeedinsights } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
       <h2 className="blurb-title">Professional Experience</h2>
        <div className="work-experience" data-aos="fade-up" data-aos-duration="1000">
          <div className="container">
              <div className="content-container">
                <TbCertificate />
                <h2>Always Open Commerce I.T. Solutions</h2>
                <p>March 2021 - April 2024</p>
              </div>
          </div>
        </div>
      <div className="container exp_container">
        <div className="exp__frontend">
        <div className="exp__content">
            <div className="expDetails-container">
              <article className="exp_details html" >
                <FaHtml5/>
                  <div>
                    <h4>HTML 5 </h4>
                  </div>
                </article>
                <article className="exp_details css">
                <FaCss3Alt />
                  <div>
                    <h4>CSS 3</h4>
                  </div>
                </article>
                <article className="exp_details scss">
                <FaSass />
                  <div>
                    <h4>SCSS</h4>
                  </div>
                </article>
                <article className="exp_details js">
                  <IoLogoJavascript />
                  <div>
                    <h4>Javascript</h4>
                  </div>
                </article>
                <article className="exp_details bootstrap">
                <FaBootstrap />
                  <div>
                    <h4>Bootstrap</h4>
                  </div>
                </article>
                <article className="exp_details reactjs">
                  <FaReact />
                  <div>
                    <h4>React JS</h4>
                  </div>
                </article>
                <article className="exp_details laravel">
                  <FaLaravel />
                  <div>
                    <h4>Laravel</h4>
                  </div>
                </article>
                <article className="exp_details bc">
                  <SiBigcommerce />
                  <div>
                    <h4>Bigcommerce</h4>
                  </div>
                </article>
                <article className="exp_details wordpress">
                  <FaWordpress />
                  <div>
                    <h4>Wordpress</h4>
                  </div>
                </article>
                <article className="exp_details shopify">
                  <FaShopify />
                  <div>
                    <h4>Shopify</h4>
                  </div>
                </article>
                <article className="exp_details graphql">
                  <GrGraphQl />
                  <div>
                    <h4>GraphQL & API</h4>
                  </div>
                </article>
                <article className="exp_details postman">
                <SiPostman />
                  <div>
                    <h4>POSTMAN API</h4>
                  </div>
                </article>
                <article className="exp_details">
                <FaPhp />
                  <div>
                    <h4>PHP</h4>
                  </div>
                </article>
                <article className="exp_details  jquery">
                  <DiJqueryLogo />
                  <div>
                    <h4>JQuery</h4>
                  </div>
                </article>
                <article className="exp_details vs">
                <DiVisualstudio />
                  <div>
                    <h4>Visual Studio Code</h4>
                  </div>
                </article>
                <article className="exp_details">
                <SiMysql />
                  <div>
                    <h4>MYsql</h4>
                  </div>
                </article>
                <article className="exp_details git">
                <FaGitAlt />
                  <div>
                    <h4>Git</h4>
                  </div>
                </article>
                <article className="exp_details">
                <SiPagespeedinsights />
                  <div>
                    <h4>SEO</h4>
                  </div>
                </article>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience