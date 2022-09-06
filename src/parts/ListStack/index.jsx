import React from "react";
import {
  Iantd,
  Ieslint,
  IGithub,
  Ireact,
  Itailwindui,
  Ivite,
} from "../../assets/images";
import { Stack } from "../../components";

const ListStack = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="p-2">
        <Stack
          name="Github"
          description="The complete developer platform to build, scale, and deliver secure software."
          image={IGithub}
          link="https://github.com/"
          type="devtools"
        />
      </div>
      <div className="p-2">
        <Stack
          name="Eslint"
          description="ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline."
          image={Ieslint}
          link="https://eslint.org/"
          type="devtools"
        />
      </div>
      <div className="p-2">
        <Stack
          name="Tailwindcss"
          description="Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project."
          image={Itailwindui}
          link="https://tailwindui.com/"
          type="devtools"
        />
      </div>
      <div className="p-2">
        <Stack
          name="React"
          description="A JavaScript library for building user interfaces"
          image={Ireact}
          link="https://reactjs.org/"
          type="devtools"
        />
      </div>
      <div className="p-2">
        <Stack
          name="Ant Design"
          description="A design system for enterprise-level products. Create an efficient and
          enjoyable work experience."
          image={Iantd}
          link="https://ant.design/"
          type="devtools"
        />
      </div>
      <div className="p-2">
        <Stack
          name="Vite js"
          description="Next Generation Frontend Tooling"
          image={Ivite}
          link="https://vitejs.dev/"
          type="devtools"
        />
      </div>
    </div>
  );
};

export default ListStack;
