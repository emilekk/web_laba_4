import { womanData } from "../mockData/womanData";
import WomanSvg from "../assets/img/Woman.svg";

export const WomanImgTemplate = ({womanImgItem}) => {
    const { alt } = womanImgItem;
    return <img src={WomanSvg} alt={alt} />
}


export const WomanRightContainerTemplate = ({rightContainerItem}) =>
{
    const {header, title, description, link: {href, linkTitle}} = rightContainerItem;
    return  (
    <div className="woman_content">
        <p className="blue">{header}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href} className="orange">{linkTitle}</a>
    </div>
    )

};


export const Woman = () => {
    const {womanImgData, womanRightContainerData} = womanData;
    return(
        <section className="section woman">
            <div className="img_and_content"> 
            <div className="woman_img">
            <WomanImgTemplate womanImgItem= {womanImgData}/>
            </div>
                <WomanRightContainerTemplate rightContainerItem = {womanRightContainerData}/>
            </div>
        </section>
    );
};

export default Woman;