import Directory from '../../components/directory/directory.component'
import "../../App.css"
import {Outlet} from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Earrings",
      image:
        "https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1200,q_auto/q_auto/v1666906058/PLP/Category%20Assets/Categories%20and%20Subcategories%20Oct%202022/Category/Earrings.jpg",
    },
    {
      id: 2,
      title: "Rings",
      image:
        "https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1080,q_auto/q_auto/v1666906058/PLP/Category%20Assets/Categories%20and%20Subcategories%20Oct%202022/Category/Rings.jpg",
    },
    {
      id: 3,
      title: "Necklaces",
      image:
        "https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1080,q_auto/q_auto/v1666906058/PLP/Category%20Assets/Categories%20and%20Subcategories%20Oct%202022/Category/Necklaces.jpg",
    },
    {
      id: 4,
      title: "Bracelets",
      image:
        "https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1080,q_auto/q_auto/v1666906058/PLP/Category%20Assets/Categories%20and%20Subcategories%20Oct%202022/Category/Bracelets_and_Anklets.jpg",
    },
    {
      id: 5,
      title: "Wedding",
      image:
        "https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1080,q_auto/q_auto/v1666906058/PLP/Category%20Assets/Categories%20and%20Subcategories%20Oct%202022/Category/Wedding.jpg",
    }
  ];

  return (
    <div className="app">
      <Directory categories={categories}/>
      <Outlet  />
    </div>
  );
};

export default Home;