import DatenschutzPage from "./pages/DatenschutzPage";
import HomePage from "./pages/HomePage";
import IridFilmClubPage from "./pages/IridFilmClubPage";
import PrivacyPage from "./pages/PrivacyPage";
import RemainingLifetimePage from "./pages/RemainingLifetimePage";

const Routes = [
  {
    path: "/",
    title: "Home",
    component: HomePage,
    hidden: false,
  },
  {
    path: "/irid-film-club",
    title: "Irid Film Club",
    component: IridFilmClubPage,
    hidden: false,
  },
  {
    path: "/remaining-lifetime",
    title: "Remaining Lifetime",
    component: RemainingLifetimePage,
    hidden: false,
  },
  {
    path: "/privacy",
    title: "Privacy",
    component: PrivacyPage,
    hidden: true,
  },
  {
    path: "/datenschutz",
    title: "Datenschutz",
    component: DatenschutzPage,
    hidden: true,
  },
];

export default Routes;
