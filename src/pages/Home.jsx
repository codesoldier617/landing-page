import React from "react";
import "./Home.css";
import HomeCarousel from "../components/Homecarousel";
const Home = () => {
  return (
    <>
      <div className="page-container">
        {" "}
        {/* Corrected class name */}
        <div className="homerow01">
          <div className="arrowimg">
            <img src="/img/top.png" alt="" />
          </div>
          <div className="banner">
            <div className="innerrow row">
              <div className="column banner-text">
                <div className="ban-over">
                  <img src="/img/Detail.png" alt="" />
                  <h1>Welcome to Decentralized Science NYC</h1>
                  <p>
                    A monthly NYC meetup for science enthusiasts to learn, share
                    projects, and socialize. We believe science is for everyone,
                    and we try to make it accessible to all.
                  </p>
                  <button className="bannerbtn">
                    RSVP to Next Event on December 10, 2024
                  </button>
                </div>
              </div>
              <div className="column banneimg">
                <div className="ban-over">
                  <img src="/img/ban_img.png" alt="Banner" />
                  <img src="/img/Detail.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homerow02">
          <div className="arrowimg1">
            <img src="/img/top.png" alt="" />
          </div>
          <div className="hr-row02-content">
            <h2>Subscribe to the mailing list.</h2>
            <p>
              About once a month, we send out an email with the latest news,
              events, and updates from the decentralized science community in
              NYC.
            </p>
            <div className="news">
              <form className="subscribe-form" method="POST">
                {" "}
                {/* Corrected `class` to `className` */}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="homerow03">
          <div className="arrowimg3">
            <img src="/img/Group-60.png" alt="" />
          </div>
          <div className="container">
            <div className="innerrow row">
              <div className="leftcontent column">
                <img src="/img/g44.png" alt="" />
                <div className="next-eve">
                  <div className="ban-over">
                    <h3>NEXT EVENT!</h3>
                  </div>
                </div>
                <h2>DeSciNYC: Science and Prediction Markets</h2>
                <p className="eve-date">
                  December 10, 2024 at 7:00 PM EST in NYC
                </p>
                <p className="presentedby">
                  Presented by: DeSciNYC, SVN, and Base.
                </p>
                <div className="sch">
                  <div className="scheduleinner">
                    <div className="ban-over">
                      <h4>Schedule:</h4>
                      <p>
                        7:00-8:00 PM: Networking <br />
                        8:00-8:30 PM: Main Talk <br />
                        8:30-9:30 PM: More Chatting
                      </p>
                      <button className="bannerbtn">RSVP</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightcontent column">
                <div className="scheduleinner">
                  <div className="ban-over">
                    <img src="/img/rectangle-33.png" alt="" />
                  </div>
                </div>
                <img src="/img/qr.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="homerow04">
          <div className="arrowimg3">
            <img src="/img/Group-60.png" alt="" />
          </div>
          <div className="container">
            <div className="homerow4 row">
              <div className="leftside column tc">
                <div className="ban-over">
                  <h2>Upcoming Events.</h2>
                  <p>
                    DeSciNYC: <br></br>Science and Prediction Markets
                  </p>
                  <img src="/img/ue.png" alt="" />
                  <button className="bannerbtn">
                    RSVP For December 10, 2024
                  </button>
                </div>
              </div>
              <div className="rightside column tc">
                <div className="ban-over">
                  <h2>Upcoming Events.</h2>
                  <p>
                    DeSciNYC: <br></br>Science and Prediction Markets
                  </p>
                  <img src="/img/ue.png" alt="" />
                  <button className="bannerbtn">
                    RSVP For December 10, 2024
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homerow05">
          <h2 className="pasteventheading">Past Events </h2>
          <div className="container">
            <div className="homerow5 row">
              <div className="column">
                <img src="/img/ue.png" alt="" />
                <h3>DeSciNYC: Gene Therapy with Minicircle</h3>
                <img className="bottomline" src="/img/line.svg" alt="" />
                <p>
                  <span className="eventauthor">Dr. Ryan Rossner</span>
                </p>
                <p>
                  <span className="evetype">LUMA EVENT</span>
                </p>
              </div>
              <div className="column">
                <img src="/img/ue.png" alt="" />
                <h3>DeSciNYC: Climate Hackathon</h3>
                <img className="bottomline" src="/img/line.svg" alt="" />
                <p>
                  <span className="eventauthor">NYC Open Data</span>
                </p>
                <p>
                  <span className="evetype">LUMA EVENT</span>
                </p>
              </div>
              <div className="column">
                <img src="/img/ue.png" alt="" />
                <h3>Ketamine: Brainwide Recording and the Neu...</h3>
                <img className="bottomline" src="/img/line.svg" alt="" />
                <p>
                  <span className="eventauthor">Dr. Isaac V Kauvar</span>
                </p>
                <p>
                  <span className="evetype">LUMA EVENT</span>
                </p>
              </div>
              <div className="column">
                <img src="/img/ue.png" alt="" />
                <h3>Longevity</h3>
                <img className="bottomline" src="/img/line.svg" alt="" />
                <p>
                  <span className="eventauthor">Bryan Jonhson</span>
                </p>
                <p>
                  <span className="evetype">LUMA EVENT</span>
                </p>
              </div>
              <div className="column">
                <img src="/img/ue.png" alt="" />
                <h3>DeSciNYC: Gene Therapy with Minicircle</h3>
                <img className="bottomline" src="/img/line.svg" alt="" />
                <p>
                  <span className="eventauthor">Dr. Ryan Rossner</span>
                </p>
                <p>
                  <span className="evetype">LUMA EVENT</span>
                </p>
              </div>
            </div>
          </div>
          {/*carousel */}
          <HomeCarousel />
        </div>
        <div className="homerow06">
          <div className="buttonrow">
            <img src="/img/g44.png" alt="" />
            <div className="findbtn">
              <div className="btnover">
                <button className="bannerbtn">FIND OUT MORE.</button>
              </div>
            </div>
          </div>
        </div>
        <div className="homerow07">
          <div className="container">

            <div className="homeinerrow07 row">
              <div className="rowinner7 column">
                <div className="ban-over">
                  <h2>Subscribe to the Calendar</h2>
                  <p>
                    A curated selection of local science events in New York City
                    and the surrounding area.
                  </p>
                  <button className="bannerbtn">
                    SUBSCRIBE TO THE CALENDAR
                  </button>
                </div>
              </div>
              <div className="rowinner7 column">
                <div className="ban-over">
                  <h2>Join the Group Telegram</h2>
                  <p>
                    Join the Decentralized Science NYC group on Telegram to chat
                    with other members.
                  </p>
                  <button className="bannerbtn">JOIN THE TELEGRAM GROUP</button>
                </div>
              </div>
            </div>

            <div className="homeinerrow07 row">
              <div className="rowinner7 column tbtn">
                <div className="ban-over">
                  <h2>Socials</h2>
                  <p>
                  Follow on Twitter, Instagram, and TikTok to stay up to date with fund content.
                  </p>
                  <button className="bannerbtn">
                    Twitter
                  </button>
                  <button className="bannerbtn">
                    Instagram
                  </button>
                  <button className="bannerbtn">
                    Tiktok
                  </button>
                </div>
              </div>
              <div className="rowinner7 column">
                <div className="ban-over">
                  <h2>Volunteer</h2>
                  <p>
                  Be part of the team that makes Decentralized Science NYC happen.
                  </p>
                  <button className="bannerbtn">VOLUNTEER</button>
                </div>
              </div>
            </div>

            <div className="homeinerrow07 row">
              <div className="rowinner7 column">
                <div className="ban-over">
                  <h2>Donate</h2>
                  <p>
                  Help us make DeSciNYC even better with funds that will go toward space and food.
                  </p>
                  <button className="bannerbtn">
                  DONATE TO DeSciNYC
                  </button>
                </div>
              </div>
              <div className="rowinner7 column">
                <div className="ban-over">
                  <h2>Volunteer</h2>
                  <p>
                  Help us make DeSciNYC even better with funds that will go toward space and food.
                  </p>
                  <button className="bannerbtn">SPONSOR DeSciNYC</button>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
