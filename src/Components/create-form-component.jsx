import supabase from "../supabase";
import { useState } from "react";

function CreateForm({
  setFacts,
  Showform,
  isUploadingPost,
  facts,
  CATEGORIES,
}) {
  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }
  async function formHandler(e) {
    e.preventDefault();
    if (text && isValidHttpUrl(source) && category) {
      console.log(text, source, category);

      isUploadingPost(true);
      const { data: newfact, error } = await supabase
        .from("Facts")
        .insert({ text, source, category })
        .select();
      setFacts(() => [newfact[0], ...facts]);
      isUploadingPost(false);
    }
    Showform(false);
  }
  const [text, setText] = useState("");
  const [source, setSource] = useState("https://example.com");
  const [category, setCategory] = useState("");
  const txtLength = text.length;
  return (
    <form className="fact-form" onSubmit={formHandler}>
      <input
        value={text}
        type="text"
        placeholder="Share a fact with the world..."
        className="fact_text"
        onChange={(e) => setText(e.target.value)}
      />
      <span className="text-limit">{200 - txtLength}</span>
      <input
        disabled={isUploadingPost}
        value={source}
        type="text"
        placeholder="Trustworthy source..."
        onChange={(e) => setSource(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploadingPost}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((e) => (
          <option key={e.name} value={e.name}>
            {e.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploadingPost}>
        Post
      </button>
    </form>
  );
}

export default CreateForm;
