import ReactGA from "react-ga";
import * as dotenv from "dotenv";

if(process.env.NEXT_PUBLIC_ENV) {
  dotenv.config({
    path: "../../.env.local"
  });
}

export const initGA = () => {
  if(process.env.NEXT_PUBLIC_ENV === "production") {
    ReactGA.initialize("G-J7M9L25FCS");
  }
};

export const logPageView = () => {
  if(process.env.NEXT_PUBLIC_ENV === "production") {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};
