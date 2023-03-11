import { FC } from "react";
import { Image } from "antd";

export const Homepage: FC = () => {
  return (
    <Image.PreviewGroup>
      <Image
        width={360}
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJYUGeI0dQs4g-X-omNxz7cz21pxHeJoeU2FK5g67EFW_Jftrj"
      />
      <Image
        width={360}
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQ0aCr9WBsyLHmyWJUrR-oM9Gyw70WRyXnCIKZl1Oa56iXuWhk"
      />
      <Image
        width={360}
        src="https://m.media-amazon.com/images/M/MV5BMTc0ODE4ODY1OF5BMl5BanBnXkFtZTgwMDA5NjkzMTE@._V1_.jpg"
      />
      <Image
        width={360}
        src="https://m.media-amazon.com/images/M/MV5BMGJjNzY1MGItOTBkNi00ODg1LWE4ODMtMTNjYWZiOTcwZWYyXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"
      />
    </Image.PreviewGroup>
  );
};
