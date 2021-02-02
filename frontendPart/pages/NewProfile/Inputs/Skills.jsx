import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as appAC from '../../../redux/actionCreators/profiles';

export default function Skills() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.profile.skills);

  const updateSkills = (e) =>
    dispatch(appAC.updateSkills(e.target.value));

  return (
    <div>
      Skills:
      <input
        type="text"
        placeholder="What are your creative skills?"
        value={skills}
        onChange={updateSkills}
      />
    </div>
  );
}
