import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Home from '../components/Home';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Home component', () => {
  it('renders all countries correctly', () => {
    // Arrange
    const mockCountries = [
      { Rank: 1, Country: 'Nigeria', '2022 Population': 200000000 },
      { Rank: 2, Country: 'Ethiopia', '2022 Population': 100000000 },
      { Rank: 3, Country: 'Egypt', '2022 Population': 80000000 },
      // include all other countries
    ];
    useSelector.mockReturnValue(mockCountries);

    // Act
    const { getByText } = render(<Home />);

    // Assert
    mockCountries.forEach((country) => {
      expect(getByText(country.Country)).toBeInTheDocument();
      expect(getByText(`${country['2022 Population']}`)).toBeInTheDocument();
    });
  });

  it('navigates to the correct country page when a country is clicked', () => {
    // Arrange
    const mockCountries = [
      {
        Rank: 1,
        Country: 'Nigeria',
        '2022 Population': 200000000,
        image: 'Nigeria.png',
      },
      {
        Rank: 2,
        Country: 'Ethiopia',
        '2022 Population': 100000000,
        image: 'Ethiopia.png',
      },
      {
        Rank: 3,
        Country: 'Egypt',
        '2022 Population': 80000000,
        image: 'Egypt.png',
      },
    ];
    useSelector.mockReturnValue(mockCountries);
    const mockSetSelectedCountry = jest.fn();
    useDispatch.mockReturnValue(mockSetSelectedCountry);
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    // Act
    const { getAllByRole } = render(<Home />);
    const countryElements = getAllByRole('button');
    fireEvent.click(countryElements[0]);

    // Assert
    expect(mockSetSelectedCountry).toHaveBeenCalledWith({
      type: 'countries/setSelectedCountry',
      payload: mockCountries[0],
    });
    expect(mockNavigate).toHaveBeenCalledWith('/country');
  });
});
