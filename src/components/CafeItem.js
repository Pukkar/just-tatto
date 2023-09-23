import './CafeItem.css';

function CafeItem(props) {
  const {tattoo,onTattooClick} = props;
    return(
        <div className="cafe-item">
        <img src={tattoo.thumbnailUrl} onClick={() => onTattooClick(tattoo)} alt={tattoo.title} />
        <h4>{tattoo.title}</h4>
      </div>
    );
}
export default CafeItem;