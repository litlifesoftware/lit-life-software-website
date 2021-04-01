import DatenschutzPage from "./pages/DatenschutzPage";
import HomePage from "./pages/HomePage";
import IridFilmClubPage from "./pages/IridFilmClubPage";
import PrivacyPage from "./pages/PrivacyPage";
import RemainingLifetimePage from "./pages/RemainingLifetimePage";
import HistoryOfMePage from "./pages/HistoryOfMePage/HistoryOfMePage";

const Routes = [
  {
    path: "/",
    title: "Home",
    component: HomePage,
    showOnNavbar: true,
    showOnFooter: false,
  },
  {
    path: "/irid-film-club",
    title: "Irid Film Club",
    component: IridFilmClubPage,
    showOnNavbar: false,
    showOnFooter: false,
  },
  {
    path: "/remaining-lifetime",
    title: "Remaining Lifetime",
    component: RemainingLifetimePage,
    showOnNavbar: true,
    showOnFooter: false,
  },
  {
    path: "/history-of-me",
    title: "History of Me",
    component: HistoryOfMePage,
    showOnNavbar: true,
    showOnFooter: false,
  },
  {
    path: "/privacy",
    title: "Privacy",
    component: PrivacyPage,
    showOnNavbar: false,
    showOnFooter: true,
  },
  {
    path: "/datenschutz",
    title: "Datenschutz",
    component: DatenschutzPage,
    showOnNavbar: false,
    showOnFooter: true,
  },
];

export default Routes;
