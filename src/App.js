import Directory from './components/directory/directory.component.jsx'
import "./App.css";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Bold Huggie Hoops",
      image:
        "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Beaded Huggie Hoops",
      image:
        "https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1200,q_auto/q_auto/v1666906058/PLP/Category%20Assets/Categories%20and%20Subcategories%20Oct%202022/Category/Charms_and_Pendants.jpg",
    },
    {
      id: 3,
      title: "Organic Pearl Hoops",
      image:
        "https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1200,q_auto/q_auto/v1666906058/PLP/Category%20Assets/Categories%20and%20Subcategories%20Oct%202022/Category/Charms_and_Pendants.jpg",
    },
    {
      id: 4,
      title: "Croissant Dôme Hoops",
      image:
        "https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1200,q_auto/q_auto/v1666906058/PLP/Category%20Assets/Categories%20and%20Subcategories%20Oct%202022/Category/Charms_and_Pendants.jpg",
    },
  ];

  return (
    <div className="app">
      <Directory categories={categories}/>
    </div>
  );
};

export default App;
