import { useParams } from "react-router-dom";
import EditCourseUi from "../../../components/admin/edit-course/EditCourseUi";


const EditCourse = () => {
    const {id}=useParams()
    return (
        <div className="">
           <EditCourseUi id={id!}/>
        </div>
    );
};

export default EditCourse;