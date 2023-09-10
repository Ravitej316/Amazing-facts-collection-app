import { useState } from "react";
import supabase from "../supabase";

function Fact({ fact, setFacts, CATEGORIES }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const catger = CATEGORIES;
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;
  async function voteHandling(colums) {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("Facts")
      .update({ [colums]: fact[colums] + 1 })
      .eq("id", fact.id)
      .select();
    setIsUpdating(false);
    console.log(updatedFact);
    if (!error)
      setFacts((FACTS) =>
        FACTS.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
  }

  return (
    <li className="fact">
      <p>
        {isDisputed ? <span>[⛔️DISPUTED]</span> : null}
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <div className="btn-handle">
        <span
          className="tag"
          style={{
            backgroundColor: catger.find((c) => c.name === fact.category).color,
          }}
        >
          {fact.category}
        </span>
        <div className="vote-buttons">
          <button
            onClick={() => voteHandling("votesInteresting")}
            disabled={isUpdating}
          >
            👍 {fact.votesInteresting}
          </button>
          <button
            onClick={() => voteHandling("votesMindblowing")}
            disabled={isUpdating}
          >
            🤯 {fact.votesMindblowing}
          </button>
          <button
            onClick={() => voteHandling("votesFalse")}
            disabled={isUpdating}
          >
            ⛔️ {fact.votesFalse}
          </button>
        </div>
      </div>
    </li>
  );
}

export default Fact;
