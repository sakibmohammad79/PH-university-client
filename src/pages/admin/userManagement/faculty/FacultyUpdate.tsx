import { useParams } from "react-router-dom";

const FacultyUpdate = () => {
  const { facultyId } = useParams();
  return (
    <div>
      <h2>This is FacultyUpdate component {facultyId}</h2>
    </div>
  );
};

export default FacultyUpdate;
