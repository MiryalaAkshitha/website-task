import UserTask from './App';
import Website from './Website';
import { Routes, Route } from "react-router-dom";
export const Webapp = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Website />} />
                <Route path="/usertask" element={<UserTask />} />

            </Routes>

        </>
    )
}