import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const GithubCalendarContribution = () => {
  return (
    <div className="md:w-[800px] grow pt-5">
      <GitHubCalendar showWeekdayLabels color="#1890ff" username="turrs">
        <ReactTooltip html />
      </GitHubCalendar>
    </div>
  );
};

export default GithubCalendarContribution;
