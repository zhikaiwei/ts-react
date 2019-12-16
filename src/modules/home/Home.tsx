import React, { useState } from "react";
import { Tag } from "antd";
import { ArrayUtils, ObjectUtils } from "ts-commons";
import { useDispatch } from "react-redux";
import { updateStateAction } from "./store/actions";
import Test from "./Test";
import { ReducerKey } from "../../enums/reducerKey";
import { injectReducer } from "../../common/store";
import { reducer } from "./store/reducer";

injectReducer(ReducerKey.Home, reducer);

const { CheckableTag } = Tag;

const Home: React.FC = () => {
  const [stateSelectedTags, setSelectedTags] = useState<number[]>([]);
  const dispatch = useDispatch();
  const handleChange = (tag: any) => {
    const nextSelectedTags = [tag];
    setSelectedTags(nextSelectedTags);
    dispatch(updateStateAction({ stateSelected: tag }));
  };
  return (
    <div>
      <h6 style={{ marginRight: 8, display: "inline" }}>Categories:</h6>
      {[
        [0, "Movies"],
        [1, "Books"],
        [2, "Music"],
        [3, "Sports"]
      ].map(tag => (
        <CheckableTag
          key={tag[0]}
          checked={ArrayUtils.contains(
            ObjectUtils.getOrDefault(stateSelectedTags, []),
            tag[0]
          )}
          onChange={checked => handleChange(tag[0])}
        >
          {tag[1]}
        </CheckableTag>
      ))}
      <Test />
    </div>
  );
};
export default Home;
