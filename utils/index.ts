import { CarProps, FilterProps } from "@/types";
import axios from "axios";

export const fetchingCars = async (filters: FilterProps) => {
  const { manufacturer, year, fuel, model, limit } = filters;

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  // const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3`;

  const options = {
    method: "GET",
    url,
    // params: { model: "corolla" },
    headers: {
      "X-RapidAPI-Key": process.env.APT_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars

  const mileageFactor = 0.1; // Additional rate per mile driven

  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calc Additional rate base on mileage and age

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calc Total Rental Rate Per Day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(`https://cdn.imagin.studio/getimage`);

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
