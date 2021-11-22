import './styles.css';

const ListDisplay = ({ item1, item1a, item2, item3 }) => {
   return (
      <div className="box">
         <h3>{item1}</h3>

         <h6>{item1a}</h6>
      </div>
   );
};

export default ListDisplay;
