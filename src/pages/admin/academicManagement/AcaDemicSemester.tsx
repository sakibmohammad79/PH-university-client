import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcaDemicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log("data", data);
  return (
    <div>
      <h1>Academic Semesters</h1>
    </div>
  );
};

export default AcaDemicSemester;
