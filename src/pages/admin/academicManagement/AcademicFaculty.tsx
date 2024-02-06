import { Button, Table, TableColumnsType } from "antd";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";

export type TFacultyTableData = Pick<TAcademicSemester, "name" | "_id">;

const AcademicFaculty = () => {
  const { data: facultyData, isFetching } = useGetAllFacultiesQuery(undefined);
  console.log(facultyData);

  const tableData = facultyData?.data?.map(({ _id, name }) => ({
    name,
    _id,
  }));

  const columns: TableColumnsType<TFacultyTableData> = [
    {
      title: "Faculty Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Faculty Id.",
      key: "_id",
      dataIndex: "_id",
    },

    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
            <Button>Delete</Button>
          </div>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   // if (extra.action == "filter") {
  //   //   const queryParams: TQueryParam[] = [];
  //   //   filters.name?.forEach((item) =>
  //   //     queryParams.push({ name: "name", value: item })
  //   //   );
  //   //   filters.year?.forEach((item) =>
  //   //     queryParams.push({ name: "year", value: item })
  //   //   );
  //   //   setParams(queryParams);
  //   // }
  // };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
    />
  );
};

export default AcademicFaculty;
