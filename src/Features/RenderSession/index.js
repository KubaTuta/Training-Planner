import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeActivity } from "../Home/unitSlice";
import { selectActiveContent } from "../Home/unitSlice";
import Modal from "./Modal";
import {
  Activity,
  Excercise,
  PlusButton,
  LayoutWrapper,
  SessionTile,
} from "./styled";
import { RemoveButton } from "../styled";

const RenderSession = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectActiveContent);

  const removeHandle = (session, exerciseId, activity) => {
    dispatch(removeActivity({ session, exerciseId, activity }));
  };

  const [modal, setModal] = useState({
    state: false,
  });

  const toggleModal = (session, exerciseId, activity) => {
    setModal((prevState) => ({
      state: !prevState.state,
      session,
      exerciseId,
      activity,
    }));
  };

  return (
    tasks?.length !== 0 && (
      <LayoutWrapper>
        {modal.state && <Modal modal={modal} toggleModal={toggleModal} />}
        {tasks.map((exercise) => (
          <Excercise key={exercise.id}>
            {Object.values(exercise).map((value) => {
              if (typeof value === "object") {
                switch (true) {
                  case value.reps !== "" && value.sets === "":
                    return (
                      <SessionTile key={value.id}>
                        <Activity>
                          Serie: {value.sets}
                          <PlusButton
                            onClick={() =>
                              toggleModal(value.id, exercise.id, "sets")
                            }
                          >
                            +
                          </PlusButton>
                        </Activity>
                        <Activity>
                          Powtórzenia: {value.reps}
                          <RemoveButton
                            onClick={() =>
                              removeHandle(value.id, exercise.id, "reps")
                            }
                          >
                            x
                          </RemoveButton>
                        </Activity>
                      </SessionTile>
                    );
                  case value.reps !== "" && value.sets !== "":
                    return (
                      <SessionTile key={value.id}>
                        <Activity>
                          Serie: {value.sets}
                          <RemoveButton
                            onClick={() =>
                              removeHandle(value.id, exercise.id, "sets")
                            }
                          >
                            x
                          </RemoveButton>
                        </Activity>
                        <Activity>
                          Powtórzenia: {value.reps}
                          <RemoveButton
                            onClick={() =>
                              removeHandle(value.id, exercise.id, "reps")
                            }
                          >
                            x
                          </RemoveButton>
                        </Activity>
                      </SessionTile>
                    );
                  case value.time !== "" && value.sets === "":
                    return (
                      <SessionTile key={value.id}>
                        <Activity>
                          Serie: {value.sets}
                          <PlusButton
                            onClick={() =>
                              toggleModal(value.id, exercise.id, "sets")
                            }
                          >
                            +
                          </PlusButton>
                        </Activity>
                        <Activity>
                          Czas: {value.time} s
                          <RemoveButton
                            onClick={() =>
                              removeHandle(value.id, exercise.id, "time")
                            }
                          >
                            x
                          </RemoveButton>
                        </Activity>
                      </SessionTile>
                    );
                  case value.time !== "" && value.sets !== "":
                    return (
                      <SessionTile key={value.id}>
                        <Activity>
                          Serie: {value.sets}
                          <RemoveButton
                            onClick={() =>
                              removeHandle(value.id, exercise.id, "sets")
                            }
                          >
                            x
                          </RemoveButton>
                        </Activity>
                        <Activity>
                          Czas: {value.time} s
                          <RemoveButton
                            onClick={() =>
                              removeHandle(value.id, exercise.id, "time")
                            }
                          >
                            x
                          </RemoveButton>
                        </Activity>
                      </SessionTile>
                    );
                  case value.reps === "" &&
                    value.time === "" &&
                    value.sets === "":
                    return (
                      <SessionTile key={value.id}>
                        <Activity>
                          Serie: {value.sets}
                          <PlusButton
                            onClick={() =>
                              toggleModal(value.id, exercise.id, "sets")
                            }
                          >
                            +
                          </PlusButton>
                        </Activity>
                        <Activity>
                          Powtórzenia: {value.reps}
                          <PlusButton
                            onClick={() =>
                              toggleModal(value.id, exercise.id, "reps")
                            }
                          >
                            +
                          </PlusButton>
                        </Activity>
                        <Activity>
                          Czas: {value.time}
                          <PlusButton
                            onClick={() =>
                              toggleModal(value.id, exercise.id, "time")
                            }
                          >
                            +
                          </PlusButton>
                        </Activity>
                      </SessionTile>
                    );
                  case value.reps === "" &&
                    value.time === "" &&
                    value.sets !== "":
                    return (
                      <SessionTile key={value.id}>
                        <Activity>
                          Serie: {value.sets}
                          <RemoveButton
                            onClick={() =>
                              removeHandle(value.id, exercise.id, "sets")
                            }
                          >
                            x
                          </RemoveButton>
                        </Activity>
                        <Activity>
                          Powtórzenia: {value.reps}
                          <PlusButton
                            onClick={() =>
                              toggleModal(value.id, exercise.id, "reps")
                            }
                          >
                            +
                          </PlusButton>
                        </Activity>
                        <Activity>
                          Czas: {value.time}
                          <PlusButton
                            onClick={() =>
                              toggleModal(value.id, exercise.id, "time")
                            }
                          >
                            +
                          </PlusButton>
                        </Activity>
                      </SessionTile>
                    );
                  default:
                    break;
                }
              }
              return null;
            })}
          </Excercise>
        ))}
      </LayoutWrapper>
    )
  );
};

export default RenderSession;
