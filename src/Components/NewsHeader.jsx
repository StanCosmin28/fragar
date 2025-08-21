import data from "../Model/data";
export default function NewsHeader() {
  return (
    <>
      <div className="w-full h-[60vh] overflow-hidden mt-16">
        <img
          src={data.newsHeader}
          alt="Blog header image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
}
