import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle, BiMicrophone } from 'react-icons/bi';
import { BsGearWide } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { setSelectedCountry } from '../store/Countries';
import Africa from '../imgs/maps.png';
import Algeria from '../imgs/Ageria.png';
import Egypt from '../imgs/egypt.png';
import Ethiopia from '../imgs/ethiopia.png';
import Kenya from '../imgs/Kenya.png';
import Nigeria from '../imgs/Nigeria.png';
import RDC from '../imgs/drc.png';
import SouthAfrica from '../imgs/SouthAfrica.png';
import Sudan from '../imgs/Sudan.png';
import Tanzania from '../imgs/Tanzania.png';
import Uganda from '../imgs/Uganda.png';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = useSelector((state) => state.countries);
  const total = countries.reduce(
    (accumulator, currentValue) => accumulator + currentValue['2022 Population'],
    0,
  );

  const images = [
    Nigeria,
    Ethiopia,
    Egypt,
    RDC,
    Tanzania,
    SouthAfrica,
    Kenya,
    Uganda,
    Sudan,
    Algeria,
  ];

  const fullCountries = countries.map((country, index) => ({
    ...country,
    image: images[index],
  }));

  const handleClick = (country) => {
    dispatch(setSelectedCountry(country));
    navigate('/country');
  };

  return (
    <div className="home-container">
      <div className="nav-status">
        <div className="nav-left">
          <FiChevronLeft className="statusIcon" />
          2022
        </div>
        <div className="nav-title">Most populate</div>
        <div className="nav-right">
          <BiMicrophone className="statusIcon" />
          <BsGearWide className="statusIcon" />
        </div>
      </div>
      <div className="head">
        <img src={Africa} alt="europe" />
        <div className="infos">
          <p>Africa</p>
          <strong>
            {total}
            {' '}
            inhabitants
          </strong>
        </div>
      </div>
      <div className="title-bar title-metrics">INFO BY COUNTRY</div>
      <div className="countriesList">
        {countries
          && fullCountries.map((country) => (
            <div
              role="button"
              tabIndex={0}
              key={country.Rank}
              className="countryItem"
              onClick={() => handleClick(country)}
              onKeyDown={() => handleClick(country)}
            >
              <BiRightArrowCircle className="icon" />
              <div className="imageContainer">
                <img src={country.image} alt={country.Country} />
              </div>

              <div className="infos">
                <p>{country.Country}</p>
                <strong>{country['2022 Population']}</strong>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
