// import React from "react";
// import { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Icon from "@mui/material/Icon";
// import MDBox from "components/MDBox";
// import Sidenav from "examples/Sidenav";
// import Configurator from "examples/Configurator";
// import theme from "assets/theme";
// import themeRTL from "assets/theme/theme-rtl";
// import themeDark from "assets/theme-dark";
// import themeDarkRTL from "assets/theme-dark/theme-rtl";
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
// import brandWhite from "assets/images/logo-ct.png";

// // Add your layout imports here
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
// import EditMenu from "layouts/tables/menu/edit-menu";
// import Tables from "layouts/tables";

// export default function App() {
//   const [controller, dispatch] = useMaterialUIController();
//   const {
//     miniSidenav,
//     direction,
//     layout,
//     openConfigurator,
//     sidenavColor,
//     transparentSidenav,
//     whiteSidenav,
//     darkMode,
//   } = controller;
//   const [onMouseEnter, setOnMouseEnter] = useState(false);
//   const [rtlCache, setRtlCache] = useState(null);
//   const { pathname } = useLocation();

//   // State to hold the fetched routes
//   const [routes, setRoutes] = useState([]);
//   // console.log(routes, "Routes");

//   // Fetch routes from the backend API
//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/routes") // Replace with your API endpoint
//       .then((response) => {
//         setRoutes(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching routes:", error);
//       });
//   }, []);

//   // Cache for the rtl
//   useMemo(() => {
//     const cacheRtl = createCache({
//       key: "rtl",
//       stylisPlugins: [rtlPlugin],
//     });

//     setRtlCache(cacheRtl);
//   }, []);

//   // Open sidenav when mouse enter on mini sidenav
//   const handleOnMouseEnter = () => {
//     if (miniSidenav && !onMouseEnter) {
//       setMiniSidenav(dispatch, false);
//       setOnMouseEnter(true);
//     }
//   };

//   // Close sidenav when mouse leave mini sidenav
//   const handleOnMouseLeave = () => {
//     if (onMouseEnter) {
//       setMiniSidenav(dispatch, true);
//       setOnMouseEnter(false);
//     }
//   };

//   // Change the openConfigurator state
//   const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

//   // Setting the dir attribute for the body element
//   useEffect(() => {
//     document.body.setAttribute("dir", direction);
//   }, [direction]);

//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   // Check for authentication (token existence) for protecting routes
//   const isAuthenticated = () => {
//     const token = sessionStorage.getItem("jwtToken");
//     // console.log(token, "Token Data:"); // Debugging line
//     return !!token;
//   };
//   // const isAuthenticated = () => {
//   //   return !!sessionStorage.getItem("jwtToken");
//   // };

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
//             element={
//               route.protected ? (
//                 isAuthenticated() ? (
//                   React.createElement(layoutComponents[route.component]) // Dynamically create component
//                 ) : (
//                   <Navigate to="/authentication/sign-in" />
//                 )
//               ) : (
//                 React.createElement(layoutComponents[route.component])
//               )
//             }
//             key={route.key}
//           />
//         );
//       }

//       return null;
//     });

//   const configsButton = (
//     <MDBox
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       width="3.25rem"
//       height="3.25rem"
//       bgColor="white"
//       shadow="sm"
//       borderRadius="50%"
//       position="fixed"
//       right="2rem"
//       bottom="2rem"
//       zIndex={99}
//       color="dark"
//       sx={{ cursor: "pointer" }}
//       onClick={handleConfiguratorOpen}
//     >
//       <Icon fontSize="small" color="inherit">
//         settings
//       </Icon>
//     </MDBox>
//   );

//   // Mapping of route component names to actual component imports
//   const layoutComponents = {
//     Dashboard,
//     Billing,
//     RTL,
//     Notifications,
//     Profile,
//     SignIn,
//     SignUp,
//     AddUser,
//     NumbersTable,
//     AddNumber,
//     EditUser,
//     EditNumber,
//     UsersTable,
//     EditModules,
//     MenuTable,
//     AddMenu,
//     EditRole,
//     EditMenu,
//     Tables,
//   };

//   return direction === "rtl" ? (
//     <CacheProvider value={rtlCache}>
//       <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
//         <CssBaseline />
//         {layout === "dashboard" && (
//           <>
//             <Sidenav
//               color={sidenavColor}
//               brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
//               brandName="Material Dashboard 2"
//               routes={routes}
//               onMouseEnter={handleOnMouseEnter}
//               onMouseLeave={handleOnMouseLeave}
//             />
//             <Configurator />
//             {configsButton}
//           </>
//         )}
//         {layout === "vr" && <Configurator />}
//         <Routes>
//           {getRoutes(routes)}
//           <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
//         </Routes>
//       </ThemeProvider>
//     </CacheProvider>
//   ) : (
//     <ThemeProvider theme={darkMode ? themeDark : theme}>
//       <CssBaseline />
//       {layout === "dashboard" && (
//         <>
//           <Sidenav
//             color={sidenavColor}
//             brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
//             brandName="Material Dashboard 2"
//             routes={routes}
//             onMouseEnter={handleOnMouseEnter}
//             onMouseLeave={handleOnMouseLeave}
//           />
//           <Configurator />
//           {configsButton}
//         </>
//       )}
//       {layout === "vr" && <Configurator />}
//       <Routes>
//         {getRoutes(routes)}
//         <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
//       </Routes>
//     </ThemeProvider>
//   );
// }

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import brandWhite from "assets/images/logo-ct.png";

// Add your layout imports here
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import AddUser from "layouts/tables/users/add-user";
import NumbersTable from "layouts/tables/numbers/numbers-table";
import AddNumber from "layouts/tables/numbers/add-number";
import EditUser from "layouts/tables/users/edit-user";
import EditNumber from "layouts/tables/numbers/edit-number";
import UsersTable from "layouts/tables/users/users-table";
import EditModules from "layouts/tables/users/edit-modules";
import MenuTable from "layouts/tables/menu/menu-table";
import AddMenu from "layouts/tables/menu/add-menu";
import EditMenu from "layouts/tables/menu/edit-menu";
import Tables from "layouts/tables";
import RolesTable from "layouts/tables/roles/roles-table";
import AddRoles from "layouts/tables/roles/add-role";
import EditRole from "layouts/tables/menu/edit-role";
import EditMainRole from "layouts/tables/roles/edit-main-role";
import ModulesTable from "layouts/tables/modules/modules-table";
import AddModules from "layouts/tables/modules/add-modules";
import EditMainModules from "layouts/tables/modules/edit-modules";
import DataSuffling from "layouts/datasuffling/data-suffling";
import SelectedModulesTable from "layouts/tables/modules/selected-modules-table";
import editSelectModules from "layouts/tables/modules/edit-select-modules";
import EditSelectModules from "layouts/tables/modules/edit-select-modules";
import MembersTable from "layouts/tables/members/members-table";
import AddMembers from "layouts/tables/members/add-members";
import EditMembers from "layouts/tables/members/edit-members";
// import { EditSelectModules } from "layouts/tables/modules/edit-select-modules";
// import { EditSelectedModules } from "layouts/tables/modules/edit-select-modules";

// Set up an Axios interceptor to include sessionId in each request
axios.interceptors.request.use(
  (config) => {
    // Retrieve sessionId from session storage
    const res_id = sessionStorage.getItem("res_id");

    if (res_id) {
      // Add sessionId to the headers
      config.headers["res_id"] = res_id;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // State to hold the fetched routes
  const [routes, setRoutes] = useState([]);

  // Fetch routes from the backend API
  useEffect(() => {
    axios
      .get("http://localhost:8000/routes") // The interceptor will add sessionId to this request
      .then((response) => {
        setRoutes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching routes:", error);
      });
  }, []);

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // Check for authentication (token existence) for protecting routes
  const isAuthenticated = () => {
    const token = sessionStorage.getItem("jwtToken");
    const sessionId = sessionStorage.getItem("res_id");
    return !!token && !!sessionId;
  };

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={
              route.protected ? (
                isAuthenticated() ? (
                  React.createElement(layoutComponents[route.component]) // Dynamically create component
                ) : (
                  <Navigate to="/authentication/sign-in" />
                )
              ) : (
                React.createElement(layoutComponents[route.component])
              )
            }
            key={route.key}
          />
        );
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  // Mapping of route component names to actual component imports
  const layoutComponents = {
    Dashboard,
    Billing,
    RTL,
    Notifications,
    Profile,
    SignIn,
    SignUp,
    AddUser,
    NumbersTable,
    AddNumber,
    RolesTable,
    AddRoles,
    EditMainRole,
    EditRole,
    DataSuffling,
    EditUser,
    EditNumber,
    UsersTable,
    EditModules,
    MenuTable,
    AddMenu,
    EditMenu,
    Tables,
    ModulesTable,
    AddModules,
    EditMainModules,
    SelectedModulesTable,
    EditMainModules,
    EditSelectModules,
    MembersTable,
    AddMembers,
    EditMembers,
  };

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Material Dashboard 2"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Material Dashboard 2"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
      </Routes>
    </ThemeProvider>
  );
}
