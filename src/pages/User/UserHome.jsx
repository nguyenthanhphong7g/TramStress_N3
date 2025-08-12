import { Route, Routes } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout/UserLayout"
import FormLogin from "../Login/FormLog";
import FormSign from "../Login/FormSign";
import GocThuGian from "../../layouts/UserLayout/GocThuGian";

function UserHome() {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<FormLogin/>} />
                <Route path="/*" element={<GocThuGian/>} />
            </Route>

    </Routes>
    )
}

export default UserHome;