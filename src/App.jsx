import "./App.css";
import SolariiJobPage from "./Pages/SolariiJobPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";
import TrainingAnnoncementSection from "./components/Features/SolariiJob/TrainingAnnoncementSection";
import WorkOppBodySection from "./components/Features/SolariiJob/WorkOppBodySection";
import JobDetailPage from "./Pages/JobDetailPage";
import EntrepriseLisJobs from "./Pages/EntrepriseLisJobs";

function App() {
  return (
    <BrowserRouter basename="/solarii-application">
      <Routes>
        <Route path="/solari-job" element={<SolariiJobPage />}>
          <Route
            path="entreprise"
            element={<Typography>Entreprise</Typography>}
          />
          <Route path="formation" element={<TrainingAnnoncementSection />} />
          <Route path="emplois" element={<WorkOppBodySection />}/>
          <Route path="emplois/:id" element={<JobDetailPage />} />
          <Route path="emplois/:name/:id" element={<EntrepriseLisJobs />} />
          <Route
            path="sous-traitance"
            element={<Typography>sous-traitance</Typography>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
