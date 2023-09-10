function CategoryList({ setCurrentCategory, CATEGORIES }) {
  const categories = CATEGORIES;
  return (
    <aside>
      <ul>
        <li className="allcategory">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {categories.map((cat) => (
          <li className="category" key={cat.name}>
            <button
              onClick={() => setCurrentCategory(cat.name)}
              className="btn btn-category technology"
              style={{
                backgroundColor: cat.color,
              }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryList;
