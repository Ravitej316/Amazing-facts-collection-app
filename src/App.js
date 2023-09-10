import { useEffect, useState } from "react";
import "./style.css";
import supabase from "./supabase";
import Header from "./Components/header-component";
import CategoryList from "./Components/categorylist-component";
import CreateForm from "./Components/create-form-component";
import FactsLis from "./Components/facts-list-component";

function App() {
  const [formstate, Showform] = useState(false);
  const [facts, setFacts] = useState([]);
  const [loading, isLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [isUploading, isUploadingPost] = useState(false);
  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

  useEffect(
    function () {
      async function getFacts() {
        isLoading(true);

        let query = supabase.from("Facts").select("*");
        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);

        const { data: Facts, error } = await query
          .order("votesInteresting", { ascending: false })
          .limit(100);
        if (!error) setFacts(Facts);
        else alert("There is a Problem with the database");
        isLoading(false);
      }
      getFacts();
    },
    [currentCategory]
  );

  return (
    <>
      <Header formstate={formstate} Showform={Showform} />
      {formstate ? (
        <CreateForm
          facts={facts}
          setFacts={setFacts}
          Showform={Showform}
          isUploadingPost={isUploadingPost}
          CATEGORIES={CATEGORIES}
        />
      ) : null}
      {/* <Counter /> */}
      <main className="main">
        <CategoryList
          setCurrentCategory={setCurrentCategory}
          CATEGORIES={CATEGORIES}
        />
        {loading ? (
          <Loader />
        ) : (
          <FactsLis
            facts={facts}
            Showform={Showform}
            setFacts={setFacts}
            CATEGORIES={CATEGORIES}
          />
        )}
      </main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading....</p>;
}

export default App;
