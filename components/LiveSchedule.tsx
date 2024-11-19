import ScheduledClasses from "./ScheduledClasses";

const LiveSchedule = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-black-primary text-center text-3xl md:text-4xl font-bold">
          Live Class <span className="text-blue-teal">Schedule</span> 
        </h2>
      </div>

      <ScheduledClasses />
    </section>
  );
};

export default LiveSchedule;
