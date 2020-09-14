/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Pay/LPA/Prime_DesktopHero_3000x1200_1._CB428950204_.jpg"
        />
        <div className="home__row">
          <Product
            id="12334234234"
            title="The lean startup"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="498276234"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            price={239}
            image="https://images-na.ssl-images-amazon.com/images/I/41dIhGZ8qWL.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="49092734634"
            title="Samsung 27 inch (68.5 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC27F390FHWXXL (Black)"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="9823413394584"
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
            rating={3}
          />
          <Product
            id="27382346287423"
            title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71TJA%2BsJv2L._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="0329487433432"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
