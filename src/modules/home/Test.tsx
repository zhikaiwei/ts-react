import React from "react";
import { useSelector } from "react-redux";
import { ReducerKey } from "../../enums/reducerKey";
import { State } from "./store/reducer";

const enum FilterType {
  Movies,
  Books,
  Music,
  Sports
}
const Test: React.FC = () => {
  const filter = useSelector(
    (state: { [ReducerKey.Home]: State }) =>
      state[ReducerKey.Home].stateSelected
  );
  return (
    <div>
      {filter === FilterType.Movies
        ? "Movies"
        : filter === FilterType.Books
        ? "Books"
        : filter === FilterType.Music
        ? "Music"
        : filter === FilterType.Sports
        ? "Sports"
        : null}
    </div>
  );
};

export default Test;
