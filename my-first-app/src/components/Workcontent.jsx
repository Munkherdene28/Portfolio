import Picture from "../assets/Picture.png";
import Button from "@/components/Button";
function Work() {
  const contentArray = Array.from({ length: 3 });
  return (
    <div>
      {contentArray.map(() => (
        <div className="flex justify-center gap-10">
          <img src={Picture.src} />
          <div className="flex flex-col gap-3 font-Inter font-normal text-gray-600 flex-col gap-6">
            <h1 className="font-Inter font-normal text-2xl text-black">
              Fiskil
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
              <br /> ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia
              <br /> curae.
            </p>

            <Button />
            <div>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 19V25C24 25.5304 23.7893 26.0391 23.4142 26.4142C23.0391 26.7893 22.5304 27 22 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V14C9 13.4696 9.21071 12.9609 9.58579 12.5858C9.96086 12.2107 10.4696 12 11 12H17"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 9H27V15"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 20L27 9"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Work;
