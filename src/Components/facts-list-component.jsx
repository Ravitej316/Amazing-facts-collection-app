import Fact from "./fact-component";
function FactsLis({ facts, Showform, setFacts, CATEGORIES }) {
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact
            key={fact.id}
            fact={fact}
            setFacts={setFacts}
            CATEGORIES={CATEGORIES}
          />
        ))}
      </ul>
      <p className="addmore">
        There are {facts.length} facts in our database. Add <br />
        <button
          className="morebtn"
          onClick={() => Showform((c) => !c, window.scrollTo(0, 0))}
        >
          MORE
        </button>
      </p>
    </section>
  );
}

export default FactsLis;
