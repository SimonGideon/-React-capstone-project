import React from 'react';
import { useSelector } from 'react-redux';
import { BiMicrophone } from 'react-icons/bi';
import { BsGearWide } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const years = [2022, 2020, 2015, 2010, 2000, 1990, 1980, 1970];

const Details = () => {
  const navigate = useNavigate();
  const country = useSelector((state) => state.selectedCountry);

  return (
    <div className="home-container">
      <div className="nav-status">
        <div
          className="nav-left"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/')}
          onKeyDown={() => navigate('/')}
        >
          <FiChevronLeft className="statusIcon" />
        </div>
        <div className="nav-title">Year populations</div>
        <div className="nav-right">
          <BiMicrophone className="statusIcon" />
          <BsGearWide className="statusIcon" />
        </div>
      </div>
      <div className="head">
        <img src={country.image} alt="Africa" />
        <div className="infos">
          <p>{country.Country}</p>
          <strong>
            {country['2022 Population']}
            {' '}
            inhabitants
          </strong>
        </div>
      </div>
      <div className="title-bar title-metrics">YEAR BREAKDOWN - 2022</div>
      <div className="countriesList">
        {years
          && years.map((year) => (
            <div key={year} className="countrydetails">
              <h3 className="year">{year}</h3>
              <div className="detailsInfo">
                <strong>
                  {country[`${year} Population`]}
                  {' '}
                  inhabitants
                </strong>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Details;
