import React from "react";
import { Typography } from "antd";
import { GithubCalendarContribution, Repository } from "../../components";
import WorkingExperience from "../WorkingExperience";
import CourseProgramming from "../CourseProgramming";
const Overview = () => {
  const { Text } = Typography;
  return (
    <div>
      <div className="p-5">
        <Text>Popular Repository</Text>
        <div className="flex flex-wrap p-5">
          <div className="md:basis md:w-1/2 p-1 w-full pr-2">
            <Repository />
          </div>
          <div className="md:basis md:w-1/2 p-1 w-full pr-2">
            <Repository />
          </div>
          <div className="md:basis md:w-1/2 p-1 w-full pr-2">
            <Repository />
          </div>
          <div className="md:basis md:w-1/2 p-1 w-full pr-2">
            <Repository />
          </div>
        </div>
      </div>
      <div className="md:basis md:w-1/2 md:p-1 w-full p-5 md:pr-2">
        <Text>Working Experience</Text>
        <WorkingExperience />
      </div>

      <div className="md:basis md:w-1/2 md:p-1 w-full md:pr-2 p-5">
        <Text>Joined Course Programming</Text>
        <CourseProgramming />
      </div>
      <div className="md:basis md:w-1/2 md:p-1 w-full md:pr-2 p-5 pt-0">
        <Text>Github Calendar</Text>
        <GithubCalendarContribution />
      </div>
    </div>
  );
};

export default Overview;
