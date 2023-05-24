import { Layout } from "./styled";
import AddNewExc from "./AddNewExc";
import AddSession from "./AddSession";
import RenderExcercises from "./RenderExc";
import RenderSession from "./RenderSession";
import SessionDate from "./SessionDate";
import useResize from "../common/hooks/useResize";

const Workout = () => {
  const pageWidth = useResize();

  if (pageWidth < 601) {
    return (
      <Layout>
        <AddSession />
        <SessionDate />
      </Layout>
    );
  } else
    return (
      <Layout>
        <AddNewExc />
        <SessionDate />
        <AddSession />
        <RenderExcercises />
        <RenderSession />
      </Layout>
    );
};

export default Workout;
