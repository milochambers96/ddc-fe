import { useParams } from "react-router-dom";
import {
  exhibitionsData,
  Exhibition,
} from "../../data/exhibitions/exhibitions";

const ExhibitionItemShell = () => {
  const { id } = useParams();
  const exhIdNum = Number(id);

  const exhItem =
    exhibitionsData.find((exhibition) => exhibition.id === exhIdNum) ?? null;

  return (
    <main>
      <h1>{exhItem?.title}</h1>
    </main>
  );
};

export default ExhibitionItemShell;
