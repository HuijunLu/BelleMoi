import './category-item.styles.scss'
const CategoryItem = ({category}) => {
  const {image, title} = category;
  console.log(image)
  return (
    <div className="category-container">
      <div className="category-image"
      style={{
        backgroundImage: "url(" + image + ")",
      }}>
      </div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;