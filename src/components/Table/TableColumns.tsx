import type { ColumnsType } from "antd/es/table";
import { Tag, Image } from "antd";
import { Movie } from "types";

const getTagColorByGenre = (genre: string): string =>
  ({
    Action: "magenta",
    Drama: "blue",
    War: "red",
    Thriller: "volcano",
    Documentary: "green",
    Animation: "purple",
    "Sci-Fi": "geekblue",
    Crime: "orange",
    Comedy: "cyan",
    Adventure: "lime",
    Horror: "processing",
    Musical: "success",
    Romance: "warning",
    Fantasy: "error",
    Western: "success",
  }[genre] || "default");

const renderGenres = (_: unknown, { genre }: Movie): JSX.Element[] => {
  const genres = genre.split("|").filter(Boolean);
  return genres.map((g: string) => (
    <Tag key={`${g}_genre`} color={getTagColorByGenre(g)}>
      {g.toUpperCase()}
    </Tag>
  ));
};

export const columns: ColumnsType<Movie> = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Photo",
    dataIndex: "thumnail",
    render: (_, { thumnail }: Movie) => <Image src={thumnail} />,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "genre",
    dataIndex: "genre",
    filterMultiple: true,
    render: renderGenres,
  },
  {
    title: "Owner",
    dataIndex: "owner",
  },
  {
    title: "Market Price",
    dataIndex: "marketPrice",
    sortDirections: ["descend", "ascend"],
    sorter: (a: Movie, b: Movie) => {
      const valueA = Number(a.marketPrice.slice(1));
      const valueB = Number(b.marketPrice.slice(1));
      return valueA - valueB;
    },
  },
];
