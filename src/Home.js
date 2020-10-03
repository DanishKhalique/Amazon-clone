import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="12321341"
						title="Sony XBR-77A9G 77 Inch TV: MASTER Series BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility"
						price={270000}
						image="https://images-na.ssl-images-amazon.com/images/I/61ZRWoHKzhL._AC_SX355_.jpg"
						rating={3}
					/>
					<Product
						id="49538094"
						title="Kenwood Mix Stand for Baking, Stylish Kitchen Mixture with K-beater, Dough Hook abd Whisk, 5 Litre Glass Bowl"
						price={20000}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/61sOuao57DL._AC_SX522_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="49538095"
						title="Apple iPhone 11 Pro Max (64GB, Midnight Green)"
						price={100000}
						rating={5}
						image="https://m.media-amazon.com/images/I/71opaMrXh8L.jpg"
					/>

					<Product
						id="49538096"
						title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
						price={250000}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SX342_.jpg"
					/>

					<Product
						id="49538091"
						title="
                                Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
						price={54000}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SX342_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="49538097"
						title="Sofab Wilder Small Sectional, London Fog"
						price={45000}
						rating={2}
						image="https://images-na.ssl-images-amazon.com/images/I/61SdarYAdxL._AC_SY355_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
