import { useParams } from "react-router-dom";

const AdminUpdate = () => {
  const { adminId } = useParams();
  return (
    <div>
      <h2>This is AdminUpdate component {adminId}</h2>
    </div>
  );
};

export default AdminUpdate;
