import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "../../Home/unitSlice";
import { ModalTile, ModalWrapper } from "../../../styled";

const Modal = ({ modal, toggleModal }) => {
  const dispatch = useDispatch();

  const [newValue, setNewValue] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    newValue.length > 0 &&
      dispatch(
        addActivity({
          session: modal.session,
          exerciseId: modal.exerciseId,
          activity: modal.activity,
          newValue,
        })
      );
    toggleModal();
  };

  useEffect(() => inputRef.current.focus(), []);

  return (
    <ModalWrapper>
      <ModalTile>
        <form>
          Podaj ilość&nbsp;
          {modal.activity === "sets" && "serii"}
          {modal.activity === "reps" && "powtórzeń"}
          {modal.activity === "time" && "czasu"}
          <input
            value={newValue}
            type="number"
            ref={inputRef}
            min={1}
            onChange={(event) => setNewValue(event.target.value)}
          />
          <button onClick={(event) => onFormSubmit(event)}>Zapisz</button>
          <button onClick={() => toggleModal()}>Anuluj</button>
        </form>
      </ModalTile>
    </ModalWrapper>
  );
};

export default Modal;
