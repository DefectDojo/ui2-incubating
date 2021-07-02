import { Dashboard } from "@material-ui/icons";
import Person from "@material-ui/icons/Person";
import ProductPage from "./views/Product";
import EngagementsPage from "./views/Engagements";
import InboxIcon from "@material-ui/icons/Inbox";
import { IconButton } from "@material-ui/core";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
const dashboardRouters = [
  {
    path: "/product",
    name: "Product",
    icon: FormatListBulletedIcon ,
    component: ProductPage,
  },
  // {
  //   path: "/engagements",
  //   name: "Engagements",
  //   component: EngagementsPage,
  // },
  {
    path: "/engagements",
    name: "Engagements",
    icon: InboxIcon,
    component: EngagementsPage,
  },
];
export default dashboardRouters;
