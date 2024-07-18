import "./style.css";

import cat1 from "../../assets/cat1.avif";
import cat2 from "../../assets/cat2.avif";
import cat3 from "../../assets/cat3.avif";
// import col1 from "../../assets/col1.avif";
// import col2 from "../../assets/col2.avif";
// import col3 from "../../assets/col3.avif";
import googlePlay from "../../assets/googlePlay.webp";
// import heroBg from "../../assets/hero-bg.avif";
import ios from "../../assets/ios.webp";
import phone from "../../assets/phone.avif";
import romato from "../../assets/zomatoFooter.avif";

const Home = () => {
  return (
    <main>
      <section className="heroSection">
        <nav className="maxWidth">
          <div className="navHeading">
            <h4>Get the App</h4>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Add Restaurant</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Signup</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mainContent">
          <h1>Romato</h1>
          <h2>Discover the best food & drinks in Delhi NCR</h2>
          <div className="heroSearch">
            <select>
              <option>Select</option>
              <option>Select</option>
              <option>Select</option>
              <option>Select</option>
              <option>Select</option>
            </select>
            <input placeholder="Search for restaurant, cuisine or a dish" />
          </div>
        </div>
      </section>
      <section className="category">
        <div className="catChild maxWidth">
          <div className="catBox">
            <img src={cat1} />
            <div className="catBoxContent">
              <h2>Order Online</h2>
              <p>Stay and order to your doorstep</p>
            </div>
          </div>
          <div className="catBox">
            <img src={cat2} />
            <div className="catBoxContent">
              <h2>Dinning</h2>
              <p>View the city&apos;s favourite dinning venues</p>
            </div>
          </div>
          <div className="catBox">
            <img src={cat3} />
            <div className="catBoxContent">
              <h2>Nightlife and clubs</h2>
              <p>Explore the city&apos;s top nightlife outlets</p>
            </div>
          </div>
        </div>
      </section>
      <section className="collection">
        <div className="collectionChild maxWidth">
          <h2>Collections</h2>
          <div className="collMain">
            <div className="coll1">
              <p>
                Explore curated lists of top restaurants, cafes, pubs, and bars
                in Delhi NCR, based on trends
              </p>
              <div className="collectionBoxes">
                <div className="collBox collBoxImg1">
                  <h4>Top Trending Spots</h4>
                  <a href="">33 Places</a>
                </div>

                <div className="collBox collBoxImg2">
                  <h4>Best Insta-worthy places</h4>
                  <a href="#">35 Places</a>
                </div>

                <div className="collBox collBoxImg3">
                  <h4>Newly Opened places</h4>
                  <a href="#">26 Places</a>
                </div>
              </div>
            </div>
            <div className="coll2">
              <p>
                <a href="#">All Collections in Delhi NCR</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="places">
        <div className="placesContainer maxWidth">
          <h2>
            Popular localities in and around <span>Delhi NCR</span>
          </h2>
          <div className="placeBoxes">
            <div className="placeBox commonFlex">
              <div>
                <h4>Connaught Place</h4>
                <p>276 places</p>
              </div>
              <div>{">"}</div>
            </div>
            <div className="placeBox commonFlex">
              <div>
                <h4>Connaught Place</h4>
                <p>276 places</p>
              </div>
              <div>{">"}</div>
            </div>
            <div className="placeBox commonFlex">
              <div>
                <h4>Connaught Place</h4>
                <p>276 places</p>
              </div>
              <div>{">"}</div>
            </div>
            <div className="placeBox commonFlex">
              <div>
                <h4>Connaught Place</h4>
                <p>276 places</p>
              </div>
              <div>{">"}</div>
            </div>
            <div className="placeBox commonFlex">
              <div>
                <h4>Connaught Place</h4>
                <p>276 places</p>
              </div>
              <div>{">"}</div>
            </div>
            <div className="placeBox commonFlex">
              <div>
                <h4>Connaught Place</h4>
                <p>276 places</p>
              </div>
              <div>{">"}</div>
            </div>
            <div className="placeBox commonFlex">
              <div>
                <h4>Connaught Place</h4>
                <p>276 places</p>
              </div>
              <div>{">"}</div>
            </div>
            <div className="placeBox commonFlex">
              <div>
                <h4>Connaught Place</h4>
                <p>276 places</p>
              </div>
              <div>{">"}</div>
            </div>
            <div className="placeBox flex alignCenter">
              <div style={{ width: "100%" }}>
                <p style={{ textAlign: "center" }}>See More</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="downloadApp flex alignCenter justifyCenter">
        <div className="downloadContainer flex alignCenter justifyCenter maxWidth">
          <div className="downImage">
            <img src={phone} />
          </div>
          <div className="downContent">
            <h2>Get the Romato app</h2>
            <p>
              We will send you link, open it on your phone to download the app.
            </p>
            <div className="radio">
              <input type="radio" />
              <label>Email</label>
              <input type="radio" />
              <label>Phone</label>
            </div>
            <div className="searchInput">
              <input type="email" placeholder="Email" />
              <button>Share App Link</button>
            </div>
            <h3>Download app from</h3>
            <div className="downImages">
              <a href="#">
                <img src={googlePlay} />
              </a>
              <a href="#">
                <img src={ios} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">FAQ</section>
      <footer className="footer">
        <div className="fContainer maxWidth">
          <div className="fBox1">
            <img src={romato} />
          </div>
          <div className="fBox2">
            <div className="fMenu">
              <h2>About Romato</h2>
              <ul>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
              </ul>
            </div>
            <div className="fMenu">
              <h2>Romaverse</h2>
              <ul>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
              </ul>
            </div>
            <div className="fMenu">
              <h2>For Restaurant</h2>
              <ul>
                <li>Demo Link</li>
                <li>Demo Link</li>
              </ul>
            </div>
            <div className="fMenu">
              <h2>Learn More</h2>
              <ul>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
                <li>Demo Link</li>
              </ul>
            </div>
            <div className="fMenu">
              <h2>Social Links</h2>
              <div className="socialLinks">
                <ul className="flex">
                  <li>F</li>
                  <li>T</li>
                  <li>L</li>
                  <li>Y</li>
                  <li>I</li>
                </ul>
              </div>
              <div className="socialImage">
                <img src={googlePlay} />
                <img src={ios} />
              </div>
            </div>
          </div>
          <div className="fBox3">
            <p>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2024 © Romato™ Ltd. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
