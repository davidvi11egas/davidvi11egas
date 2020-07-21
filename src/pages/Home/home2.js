import React, { Component } from "react";
import "./Home2.css";
import Navbar from '../../components/Navbar';

// import droneShot from '../../images/lakeDroneShot.jpg';



class Home2 extends Component {
  render() {
    return (
      
      <div>
    
        <div className="videoHolder">
      

          <video id="background-video" width="100%" loop autoPlay muted >
            <source src={"https://dvdvllgsbuck201803-dvdeng.s3.us-east-2.amazonaws.com/fireWorks1.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <span id="nameLine">David Villegas</span>
          
         
            <Navbar />
  


          </div>
        </div>

        <div className="mobile">
              <Navbar/>
            </div>

{/*      
        <div className= "blurbSection">

          <p className="text_column">
            <h1><a href="http://natgeotv.com/ca/human-shark-bait/facts">WEB DEVELOPMENT</a></h1>
                Are sharks out to get you? That’s the driving question behind this high-adrenaline, two-hour live National Geographic event.  Human Shark Bait will beam from some of the world’s most shark-infested waters off the coast of South Africa. Commonly referred to as “Shark Bay,” it is home to some of the most concentrated and diverse shark populations in the world, including species with a reputation for attacking people, such as great white, bull, tiger, black tip, mako, ragged tooth and blue sharks. Here, a team of free-divers and conservationists put their safety on the line to separate shark attack myths from realities while swimming freely among them.
                </p>
          <p className="text_column">
            <h1><a href="/home"> DIGITAL MARKETING </a></h1>
                In order for a comparison of shark bite numbers across locations to be meaningful, the
                locations must share a common feature or available statistic. One such statistic, which we called the
                ‘‘bite rate’’ in earlier projects, is the ratio between the human population and the number of bites
                within a given region. In the past, estimates of the total ‘‘beach population’’—that is, the total number
                of individuals populating the beaches—for a given location throughout a year have served as the
                denominator for the purpose of calculating this ratio.
                 </p>
          <p className="text_column">
            <h1><a href="/"> CONTENT CREATION </a></h1>
                Sharks are crucial to marine ecosystems. They maintain a balance in populations of prey species
                and keep the ocean healthy by removing ill or diseased animals. They are an important resource
                supporting local economies through fishing and as an attraction to dive tourists. Sharks are in a global decline. Overfishing has reduced many shark populations around the
                world to levels that threaten their continued existence. Shark numbers have fallen by more than
                80% in many cases, and the continued existence of some species is at immediate risk in some
                regions.
                </p>
        </div> */}
        {/* <!-- Stats Gallery Section --> */}
        {/* <div className="gallery justify-content-enter">
          <div className="thumbnail">
            <h1 className="stats">1500</h1>
            <h4>TITLE</h4>
            <p>One line description</p>
          </div>
          <div className="thumbnail">
            <h1 className="stats">2300</h1>
            <h4>TITLE</h4>
            <p>One line description</p>
          </div>
          <div className="thumbnail">
            <h1 className="stats">7500</h1>
            <h4>TITLE</h4>
            <p>One line description</p>
          </div>
          <div className="thumbnail">
            <h1 className="stats">9870</h1>
            <h4>TITLE</h4>
            <p>One line description</p>
          </div>
        </div> */}
        {/* <!-- Parallax Section --> */}
        {/* <section className="banner">
            <h2 className="parallax"> New Smyrna Beach Florida has been named The Shark Attack Capital of the World for 2020</h2>
            <p className="parallax_description"><h3>
              <a href="https://www.cnn.com/2020/01/22/us/florida-shark-attack-capital-trnd/index.html">
                Read more about close encounters from CNN
                </a></h3>
            </p>
          </section> */}
        {/* <section className="banner">
          <h2 className="parallax"> DAVID VILLEGAS </h2>
          <p className="parallax_description"><h3>
            <a href="/photography">
              See what I can do with just an iPhone
                </a></h3>
          </p>
        </section> */}
        {/* <!-- More Info Section --> */}
        {/* <footer>
          <article className="footer_column">
            <h3>ABOUT</h3>
            <p>
              In order for a comparison of shark bite numbers across locations to be meaningful, the
              locations must share a common feature or available statistic. One such statistic, which we called the
              ‘‘bite rate’’ in earlier projects, is the ratio between the human population and the number of bites
              within a given region. In the past, estimates of the total ‘‘beach population’’—that is, the total number
              of individuals populating the beaches—for a given location throughout a year have served as the
              denominator for the purpose of calculating this ratio. However, such estimates are not always
              available, as is the case for regions within the United States, such as states that border the Gulf of
              Mexico including the west coast of Florida. In order to compensate for this gap in the data, we have
              been exploring the use of the ‘‘resident population’’ as a proxy for beach population numbers to
              determine bite rates.
                </p>
          </article>
          <article className="footer_column">
            <h3>LOCATION</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </p>
          </article>
        </footer> */}
        {/* <!-- Footer Section --> */}
        <section className="footer_banner p-2" id="contact">
          <h2 className="hidden"> David Villegas</h2>
          <p className="hero_header"> Quick Reference </p>
          <img src={"https://img.icons8.com/color/60/000000/react-native.png"} alt="react.js logo"/>
          
          <div className="button">Contact</div>
        </section>
        {/* <!-- Copyrights Section --> */}
        <div className="copyright">&copy;2020- <strong>David Villegas</strong></div>
        {/* </div> */}

      </div>
    )
  }
}

export default Home2;