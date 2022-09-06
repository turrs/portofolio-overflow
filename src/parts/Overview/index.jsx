import React from "react";
import { Typography } from "antd";
import {
  GithubCalendarContribution,
  LabelSection,
  Repository,
} from "../../components";
import WorkingExperience from "../WorkingExperience";
import CourseProgramming from "../CourseProgramming";
const Overview = () => {
  const { Text } = Typography;
  return (
    <div>
      <div className="p-5 pl-0">
        <LabelSection label="Popular Repository"></LabelSection>
        <div className="flex flex-wrap">
          <div className="md:basis md:w-1/2 p-1 w-full pr-2">
            <Repository
              to="https://github.com/turrs/DataOnTraining"
              text="Data On Training"
              stack={{
                javascript: true,
                html: true,
                css: true,
              }}
            />
          </div>
          <div className="md:basis md:w-1/2 p-1  w-full pr-2">
            <Repository
              to="https://github.com/turrs/bwamern"
              text="BWA Mern"
              stack={{
                javascript: true,
                css: true,
                html: true,
              }}
            />
          </div>
          <div className="md:basis md:w-1/2 p-1 w-full pr-2">
            <Repository
              to="https://github.com/turrs/mydoctor-bwa"
              text="BWA Doctor"
              stack={{
                javascript: true,
                css: true,
              }}
            />
          </div>
          <div className="md:basis md:w-1/2 p-1 w-full pr-2">
            <Repository
              to="https://github.com/turrs/server-staycation"
              text="Server-Staycation BWA Mern"
              stack={{
                javascript: true,
                html: true,
                css: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="md:basis md:w-1/2 md:p-1 w-full p-5  md:pr-2">
        <LabelSection label="Working Experience"></LabelSection>
        <WorkingExperience />
      </div>

      <div className="md:basis md:w-1/2 md:p-1 w-full md:pr-2 p-5">
        <LabelSection label="Joined Course Programming"></LabelSection>
        <CourseProgramming />
      </div>
      <div className="md:basis md:w-1/2 md:p-1 w-full md:pr-2 p-5 pt-0">
        <LabelSection label="Github Calendar"></LabelSection>
        <GithubCalendarContribution />
      </div>
    </div>
  );
};

export default Overview;
