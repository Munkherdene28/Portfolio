import logo from "../assets/logo.png";
const JobCard = () => {
  const jobData = {
    title: "Sr. Frontend Developer",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Nov 2021 - Present",
  };
  return (
    <div className="flex gap-20 bg-white rounded-lg justify-center w-2/5 h-60 shadow-lg">
      <div className="">
        <img src={logo.src} alt="Logo" />
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-3 font-Inter font-normal text-gray-600">
          <h1 className="font-Inter font-normal text-2xl text-black">
            {jobData.title}
          </h1>
          {jobData.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </div>
        <div className="">
          <p>{jobData.date}</p>
        </div>
      </div>
    </div>
  );
};
const Render = () => {
  return (
    <div className="flex gap-20 flex-col justify-center items-center">
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
};
export default Render;
