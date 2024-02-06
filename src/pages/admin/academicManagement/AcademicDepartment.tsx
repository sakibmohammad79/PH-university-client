import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TQueryParam } from "../../../types";
import { useGetAllDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";

export type TTableData = Pick<TAcademicSemester, "name" | "_id">;

const AcademicDepartment = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: departmentData, isFetching } =
    useGetAllDepartmentsQuery(params);

  const tableData = departmentData?.data?.map(({ _id, name }) => ({
    _id,
    name,
  }));
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: [
        {
          text: "Depertment of python",
          value: "Depertment of python",
        },
        {
          text: "Depertment of L1",
          value: "Depertment of L1",
        },
        {
          text: "Depertment of L2",
          value: "Depertment of L2",
        },
      ],
    },
    {
      title: "Department Id.",
      key: "id",
      dataIndex: "_id",
    },

    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action == "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      setParams(queryParams);
    }
  };
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcademicDepartment;
