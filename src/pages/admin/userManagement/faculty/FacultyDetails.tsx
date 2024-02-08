import { useParams } from "react-router-dom";

const FacultyDetails = () => {
  const { facultyId } = useParams();
  return (
    <div>
      <h2>This is FacultyDetails component {facultyId}</h2>
    </div>
  );
};

export default FacultyDetails;
