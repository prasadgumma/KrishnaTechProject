const {
  default: IndiaProject,
} = require("layouts/profile/components/ProjectOverView/india-project");

const routes = [
  {
    type: "collapse",
    name: "ProjectOverView",
    key: "indiaProject",
    route: "/pages/profile/profile-overview",
    component: <IndiaProject />,
  },
];

export default routes;
