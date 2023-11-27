import Data from "@/components/Data";
function one() {
  return (
    <div className="flex flex-col gap-6 bg-gray-50 pt-2 h-4/5">
      <div className="flex flex-col justify-center items-center gap-3">
        <button className="flex bg-gray-600 justify-center items-center w-28 h-7 rounded-lg">
          Experience
        </button>
        <p className="text-gray-600 text-xl">Here is a quick summary of my most recent experiences:</p>
      </div>
      <Data />
    </div>
  );
}
export default one;
