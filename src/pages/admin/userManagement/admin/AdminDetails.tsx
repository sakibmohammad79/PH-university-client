import { useParams } from "react-router-dom";

const AdminDetails = () => {
  const { adminId } = useParams();
  return (
    <div>
      <h2>This is AdminDetails component {adminId}</h2>
    </div>
  );
};

export default AdminDetails;
