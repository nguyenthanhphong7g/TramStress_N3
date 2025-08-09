import { Route, Routes } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout/UserLayout"
import FormLogin from "../Login/FormLog";
import FormSign from "../Login/FormSign";

function UserHome() {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<FormLogin />} />
            </Route>
    </Routes>
    )
}

export default UserHome;