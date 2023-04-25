import React, { useState } from 'react'
import { Layout } from './styled';
import AddNewExc from './AddNewExc';
import AddSession from './AddSession';
import Date from "./SessionDate";
import RenderExcercises from './RenderExc';
import RenderSession from './RenderSession';

const Workout = () => {
  const [newDate, setNewDate] = useState("");
  return (
    <Layout >
      <AddNewExc
        newDate={newDate}
      />
      <Date />
      <AddSession
        newDate={newDate}
        setNewDate={setNewDate}
      />
      <RenderExcercises />
      <RenderSession />
    </Layout>
  )
}

export default Workout;