import './CafePost.css';

function CafePost(props){
    const {tattoo, onBgClick} = props;
    return(
        <div className="cafe-post">
            <div className="cafe-post-bg" onClick={onBgClick}/>
            <div className="cafe-post-content">
            <img src={tattoo.thumbnailUrl} />
        <h3>{tattoo.title}</h3>
            </div>
        </div>
    );
}
export default CafePost;