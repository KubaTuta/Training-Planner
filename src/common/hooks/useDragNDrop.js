import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

export const useDragNDrop = (action) => {
  const dispatch = useDispatch();
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const [startTile, setStartTile] = useState(null);
  const [endTile, setEndTile] = useState(null);

  const handleStart = (id) => {
    dragItem.current = id;
    setStartTile(id);
  };

  const handleEnter = (id) => {
    dragOverItem.current = id;
    setEndTile(id);
  };

  const handleDragDrop = () => {
    setEndTile(null);
    setStartTile(null);
  };

  useEffect(() => {
    if ((startTile !== null) & (endTile !== null)) {
      dispatch(action({ start: startTile, end: endTile }));
      setStartTile(endTile);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTile]);

  return {endTile, handleStart, handleEnter, handleDragDrop}
}