import { BallTriangle } from "react-loader-spinner";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const [makeAdmin, isAdminLoading] = useAdmin();
    const isAdmin = makeAdmin?.admin;

    if(isAdminLoading){
        return <div className="flex justify-center items-center mt-36">
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
        />
    </div>
    }
    if(isAdmin){
        return children;
    }

};

export default AdminRoute;