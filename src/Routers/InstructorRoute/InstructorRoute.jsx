import { BallTriangle } from "react-loader-spinner";
import useInstructor from "../../hooks/useInstrucror";

const InstructorRoute = ({ children }) => {
    const [makeInstructor, isInstructorLoading] = useInstructor();

    if (isInstructorLoading) {
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

    const isInstructor = makeInstructor?.instructor
    if (isInstructor) {
        return children;
    }

};

export default InstructorRoute;