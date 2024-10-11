import React, { useEffect, useState } from "react";
import ModulesTable from "./ModulesTable";
import AddModules from "./AddModules";
import axios from "axios";

const ModulesManager = () => {
  const [modulesData, setModulesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8585/modulesData")
      .then((res) => setModulesData(res.data))
      .catch((error) => console.error(error));
  }, []);

  const addModule = (newModule) => {
    setModulesData((prev) => [...prev, newModule]);
  };

  const deleteModule = (id) => {
    axios
      .delete(`http://localhost:8585/modulesData/${id}`)
      .then(() => {
        setModulesData((prev) => prev.filter((module) => module.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <AddModules onAddModule={addModule} />
      <ModulesTable modulesData={modulesData} onDelete={deleteModule} />
    </div>
  );
};

export default ModulesManager;
