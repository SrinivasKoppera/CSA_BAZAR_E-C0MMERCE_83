import TestimonnialCard from "./Partials/testimmonial-card";
import "./index.css";

const Testimonnials = () => {
  const testimmonialArray = [
    {
      title: "Fast delivery and even better quality!",
      description:
        "I ordered a few items just to try them out, and I was blown away. Everything arrived quickly, beautifully packaged, and exactly as described. This shop has definitely earned a repeat customer.",
      name: "— Jessica M., New York",
      rating: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      title: "Excellent customer service!",
      description:
        "There was a small issue with my order, but the team responded within hours and resolved it immediately. It's rare to find companies that actually care — but this one does. Highly recommend!",
      name: "— Daniel R., Los Angeles",
      rating: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      title: "Quality products at great prices",
      description:
        "I love how affordable everything is without compromising on quality. The items I got looked and felt much more expensive than they were. Shopping here feels like a win every time.",
      name: "— Priya S., Chicago",
      rating: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      title: "My go-to online store now!",
      description:
        "I’ve ordered multiple times and have never been disappointed. From trendy designs to reliable shipping, everything has been smooth and enjoyable. I always look forward to my next order!",
      name: "— Liam T., Austin",
      rating: "⭐️⭐️⭐️⭐️⭐️",
    },
  ];

  return (
    <div>
      <h1>Testimonnials</h1>
      <div className="testimonnial-container">
        {testimmonialArray.map((eachOne, index) => (
          <TestimonnialCard key={index} eachOne={eachOne} />
        ))}
      </div>
    </div>
  );
};

export default Testimonnials;
