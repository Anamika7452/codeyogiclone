import React from "react";
import AssignmentsList from "./AssignmentsList";
import LecturesList from "./LecturesList";
import Quiz from "./Quiz";
import ProfilePage from "./ProfilePage";
import MainLayout from "./MainLayout";
import NotFoundPage from "./NotFoundPage";
import AssignmentDetailList from "./AssignmentDetailList";
import StudentList from "./StudentList";
import Login from "./Login";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/lectures" />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="assignments" element={<AssignmentsList />} />

              <Route
                path="assignments/:id/details"
                element={<AssignmentDetailList />}
              />

              <Route path="lectures" element={<LecturesList />} />
              <Route path="ProfilePage" element={<ProfilePage />} />
              <Route path="students" element={<StudentList />} />
            </Route>
            <Route path="quiz" element={<Quiz />} />
            <Route path="logout" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
