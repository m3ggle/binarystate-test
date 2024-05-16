import { Link } from "react-router-dom";
import { detailsText } from "../data/detailsText";

const Details = () => {
  return (
    <div className="w-full h-screen flex flex-wrap gap-4 xl:gap-6 p-10">
      {detailsText.map((section, index) => (
        <section
          key={index}
          className="w-[300px] h-fit flex flex-col gap-4 xl:gap-6 p-2"
        >
          <h3>{section.title}</h3>
          <p>{section.paragraph}</p>
        </section>
      ))}

      <section className="w-[300px] p-2 md:w-full flex justify-center">
        <Link to="/" className="button" role="button" tabIndex={0}>
          Zurück zur Homepage
        </Link>
      </section>
    </div>
  );
};

export default Details;
