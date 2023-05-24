import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled";
import { removeActivity, selectActiveContent } from "../Home/unitSlice";
import { Tile } from "./styled";
import {
  Activity,
  Excercise,
  PlusButton,
  SessionTile,
} from "../RenderSession/styled";
import { RemoveButton } from "../styled";
import useResize from "../../common/hooks/useResize";

const MobileSession = ({ toggleModal, id }) => {
  const tasks = useSelector(selectActiveContent);
  const dispatch = useDispatch();
  const pageWidth = useResize();

  const removeHandle = (session, exerciseId, activity) => {
    dispatch(removeActivity({ session, exerciseId, activity }));
  };
  const setExercises = () => {
    const sessionName = "session" + id;
    const filteredExercises = tasks.filter(
      (exercise) => exercise[sessionName]?.id === id
    );
    const selectedKeys = ["exercise", "id", sessionName];

    const filteredSessions = filteredExercises.map((exercise) => {
      const filteredSession = Object.fromEntries(
        Object.entries(exercise).filter(([key]) => selectedKeys.includes(key))
      );
      return filteredSession;
    });
    return filteredSessions
  };

  const exercises = setExercises()

  if (pageWidth > 600) {
    toggleModal();
  } else
    return (
      <Wrapper>
        {exercises.map((exercise) => (
          <>
            <Tile>{exercise.exercise}</Tile>
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
          </>
        ))}

        <button onClick={toggleModal}>anuluj</button>
      </Wrapper>
    );
};

export default MobileSession;
