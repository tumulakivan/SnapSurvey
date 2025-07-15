import type React from "react";

type PersonalInfoProps = {
  states: {
    email: string;
    name: string;
  };

  actions: {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
  };
};

const PersonalInfo: React.FC<PersonalInfoProps> = ({ states, actions }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Personal Information</h1>
      <div className="flex flex-col gap-2">
        <p className="text-sm translate-x-2">
          E-mail address <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          value={states.email}
          onChange={(e) => actions.setEmail(e.target.value)}
          className="bg-bg w-full p-2 rounded-lg border border-mentisblue caret-fieldgray"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm translate-x-2">
          Full Name <span className="italic">(Last Name, First Name MI.)</span>
        </p>
        <input
          type="text"
          value={states.name}
          onChange={(e) => actions.setName(e.target.value)}
          className="bg-bg w-full p-2 rounded-lg border border-mentisblue caret-fieldgray"
        />
      </div>
    </>
  );
};

export default PersonalInfo;
