/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
// import Dashboard from "layouts/dashboard";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
// import Profile from "layouts/profile";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// // @mui icons
// import Icon from "@mui/material/Icon";
// import AddUser from "layouts/tables/users/add-user";
// import NumbersTable from "layouts/tables/numbers/numbers-table";
// import AddNumber from "layouts/tables/numbers/add-number";
// import EditUser from "layouts/tables/users/edit-user";
// import EditNumber from "layouts/tables/numbers/edit-number";
// import UsersTable from "layouts/tables/users/users-table";
// import EditModules from "layouts/tables/users/edit-modules";
// import MenuTable from "layouts/tables/menu/menu-table";
// import AddMenu from "layouts/tables/menu/add-menu";
// import EditRole from "layouts/tables/menu/edit-role";

// const routes = [
//   {
//     type: "collapse",
//     name: "Dashboard",
//     key: "dashboard",
//     icon: <Icon fontSize="small">dashboard</Icon>,
//     route: "/dashboard",
//     component: <Dashboard />,
//   },
//   {
//     type: "collapse",
//     name: "User Table",
//     key: "userstables",
//     icon: <Icon fontSize="small">table_view</Icon>,
//     route: "/users-tables",
//     component: <UsersTable />,
//   },
//   {
//     type: "collapse",
//     name: "Numbers Table",
//     key: "numbersTables",
//     icon: <Icon fontSize="small">table_view</Icon>,
//     route: "/numbers-tables",
//     component: <NumbersTable />,
//   },
//   {
//     type: "collapse",
//     name: "Menu Table",
//     key: "menuTables",
//     icon: <Icon fontSize="small">table_view</Icon>,
//     route: "/menu-tables",
//     component: <MenuTable />,
//   },
//   {
//     type: "collapse",
//     name: "Billing",
//     key: "billing",
//     icon: <Icon fontSize="small">receipt_long</Icon>,
//     route: "/billing",
//     component: <Billing />,
//   },
//   {
//     type: "collapse",
//     name: "RTL",
//     key: "rtl",
//     icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
//     route: "/rtl",
//     component: <RTL />,
//   },
//   {
//     type: "collapse",
//     name: "Notifications",
//     key: "notifications",
//     icon: <Icon fontSize="small">notifications</Icon>,
//     route: "/notifications",
//     component: <Notifications />,
//   },
//   {
//     type: "collapse",
//     name: "Profile",
//     key: "profile",
//     icon: <Icon fontSize="small">person</Icon>,
//     route: "/profile",
//     component: <Profile />,
//   },
//   {
//     type: "collapse",
//     name: "Sign In",
//     key: "sign-in",
//     icon: <Icon fontSize="small">login</Icon>,
//     route: "/authentication/sign-in",
//     component: <SignIn />,
//   },
//   {
//     type: "collapse",
//     name: "Sign Up",
//     key: "sign-up",
//     icon: <Icon fontSize="small">assignment</Icon>,
//     route: "/authentication/sign-up",
//     component: <SignUp />,
//   },
//   // Users Table
//   {
//     name: "Add User",
//     route: "add/user",
//     component: <AddUser />,
//     key: "add-user",
//   },
//   {
//     name: "Update User",
//     route: "edit/user/:id",
//     component: <EditUser />,
//     key: "edit-user",
//   },
//   {
//     name: "Edit Modules",
//     route: "edit/modules/:userId",
//     component: <EditModules />,
//     key: "edit-modules",
//   },
//   // Numbers table
//   {
//     name: "Add Number",
//     route: "add/number",
//     component: <AddNumber />,
//     key: "add-number",
//   },
//   {
//     name: "Edit Number",
//     route: "edit/number/:id",
//     component: <EditNumber />,
//     key: "edit-number",
//   },
//   // Menu Table
//   {
//     name: "Add Menu",
//     route: "add/menu",
//     component: <AddMenu />,
//     key: "add-menu",
//   },
//   {
//     name: "Edit Role",
//     route: "edit/roles/:menuId",
//     component: <EditRole />,
//     key: "edit-roles",
//   },
// ];

// export default routes;

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// // Import your layout components
// import Dashboard from "layouts/dashboard";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
// import Profile from "layouts/profile";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
// import AddUser from "layouts/tables/users/add-user";
// import NumbersTable from "layouts/tables/numbers/numbers-table";
// import AddNumber from "layouts/tables/numbers/add-number";
// import EditUser from "layouts/tables/users/edit-user";
// import EditNumber from "layouts/tables/numbers/edit-number";
// import UsersTable from "layouts/tables/users/users-table";
// import EditModules from "layouts/tables/users/edit-modules";
// import MenuTable from "layouts/tables/menu/menu-table";
// import AddMenu from "layouts/tables/menu/add-menu";
// import EditRole from "layouts/tables/menu/edit-role";

// const layoutComponents = {
//   Dashboard,
//   Billing,
//   RTL,
//   Notifications,
//   Profile,
//   SignIn,
//   SignUp,
//   AddUser,
//   NumbersTable,
//   AddNumber,
//   EditUser,
//   EditNumber,
//   UsersTable,
//   EditModules,
//   MenuTable,
//   AddMenu,
//   EditRole,
// };

// const RoutesComponent = (routes) => {
//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }

//       if (route.route) {
//         return (
//           <Route
//             exact
//             path={route.route}
//             element={React.createElement(layoutComponents[route.component])}
//             key={route.key}
//           />
//         );
//       }

//       return null;
//     });

//   return (
//     <Routes>
//       {getRoutes(routes)}
//       <Route path="*" element={<Navigate to="/dashboard" />} />
//     </Routes>
//   );
// };

// export default RoutesComponent;
