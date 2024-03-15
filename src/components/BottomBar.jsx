import bottomBarData from "../mockData/bottomBarData";

export const BottomBarTemplate = ({bottom}) => {
    const {title, description, btnName} = bottom
    return (
        <section className="section bottom_bar">
            <div className="bottom_bar_text">
                <p>{title}</p>
                <h3>{description}</h3>
            </div>
            <div>
                <button className="btn bottom_bar_btn">{btnName}</button>
            </div>
        </section>
    )
}

export const BottomBar = () => {
    return <BottomBarTemplate bottom = {bottomBarData}/>;
};

export default BottomBar;