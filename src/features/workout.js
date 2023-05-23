import { Layout } from './styled';
import AddNewExc from './AddNewExc';
import AddSession from './AddSession';
import Date from "./SessionDate";
import RenderExcercises from './RenderExc';
import RenderSession from './RenderSession';

const Workout = () => (
  <Layout >
    <AddNewExc />
    <Date />
    <AddSession />
    <RenderExcercises />
    <RenderSession />
  </Layout>
);

export default Workout;