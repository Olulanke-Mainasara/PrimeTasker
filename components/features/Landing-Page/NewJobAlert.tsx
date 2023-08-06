import React from "react";

const task = [
  {
    id: 1,
    task: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
  },
  {
    id: 2,
    task: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
  },
  {
    id: 3,
    task: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
  },
];

const NewJobAlert = () => {
  return (
    <section className="relative flex flex-col min-h-screen p-6 gap-5 lg:p-8">
      <div className="absolute left-0 w-full h-1/2 -z-10 bg-reserved-150 top-3"></div>
      <div className="lg:h-[26dvh] flex gap-5 lg:gap-0 justify-between">
        <div className="h-[195px] w-[389px] bg-white rounded-sm"></div>
        <div className="h-[195px] w-[389px] bg-white rounded-sm"></div>
        <div className="h-[195px] w-[389px] bg-white rounded-sm"></div>
      </div>
      <div className="flex flex-col p-8 gap-5 rounded-md grow bg-reserved-100 lg:gap-0">
        <div className="py-2 bg-white rounded-sm px-7 w-fit">New Job Alert</div>
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <div className="space-y-4 basis-1/2">
            <h1 className="text-xl">Lorem ipsum</h1>
            {task.map((taskInfo) => {
              return (
                <div key={taskInfo.id} className="flex gap-2">
                  <p className="text-sm">&#x2713;</p>
                  <div className="space-y-3">
                    <h2 className="w-full text-md opacity-70">
                      {taskInfo.task}
                    </h2>
                    <p className="opacity-60 text-[18px]">
                      {taskInfo.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="basis-3/4 w-full min-h-[642px] h-full bg-[#B4ACAC] rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

export default NewJobAlert;
