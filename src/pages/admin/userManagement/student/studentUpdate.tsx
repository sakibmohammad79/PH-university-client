import { useParams } from "react-router-dom";

const StudentUpdate = () => {
  const { studentId } = useParams();
  return (
    <div>
      <h2>This is StudentUpdate component {studentId}</h2>
    </div>
  );
};

export default StudentUpdate;
