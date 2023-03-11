import React from "react";
import { Table } from "antd";
import { Movie } from "types";
import { useMovieContext } from "providers";
import { columns } from "./TableColumns";

export const AppTable: React.FC = () => {
  const { data, loading } = useMovieContext();

  return (
    <Table<Movie>
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={{ pageSize: 10 }}
    />
  );
};
