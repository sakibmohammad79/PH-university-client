import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemestersQuery(undefined);
  console.log("data", data);
  return (
    <div>
      <h1>Academic Semesters</h1>
    </div>
  );
};

export default AcademicSemester;
