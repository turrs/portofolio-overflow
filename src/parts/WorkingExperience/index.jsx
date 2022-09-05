import { Divider, Steps } from "antd";
import React from "react";

const { Step } = Steps;

const WorkingExperience = () => {
  return (
    <Steps progressDot current={1} direction="vertical">
      <Step
        title="Technical Support"
        description="Technical Support in Hospital"
      />
      <Step
        title="Trader"
        description="Trader, Analysis and Investor in Cryptocurrency"
      />
      <Step title="Programmer" description="Looking for a job in programming" />
    </Steps>
  );
};

export default WorkingExperience;
