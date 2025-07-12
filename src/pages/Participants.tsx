import ParticipantCards from "../components/ParticipantCards";
import ParticipantsTable from "../components/ParticipantsTable";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Participants: React.FC = () => {
  const isLarge = useMediaQuery();

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto p-4 pb-20 lg:h-full lg:pb-0 lg:bg-white lg:rounded-xl gap-4 relative">
      {isLarge ? <ParticipantsTable /> : <ParticipantCards />}
    </div>
  );
};

export default Participants;
