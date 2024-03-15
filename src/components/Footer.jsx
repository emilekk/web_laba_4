import { footerData } from "../mockData/footerData";
import logo2Svg from "../assets/img/logo2.svg"

export const FooterHeaderTemplate = ({fheaderItem}) => {
    const {title, btnText} = fheaderItem;
    return (
        <>
            <h1 className ="section footer_title">{title}</h1>
            <button className ="btn footer_btn">{btnText}</button>
         </>   
    );
};

export const FooterLeftTemplate = ({fleftItem}) => {
    const {text} = fleftItem;
    return (
        <div class="footer_cont_left">
            <img src={logo2Svg} class="gptlogo"></img>
            <p class="adress">{text}</p>
        </div>);
}

export const FooterFooterTemplate = ({text}) => {
    return (
        <div class="footer_footer">{text}</div>
    )
}


///////

export const ArrayTemplate = ({arrItem}) =>
{
    const {href, arrtitle} = arrItem;
    console.log();
    return (
        <a href={href}>{arrtitle}</a>
    )
}


export const FooterRightTemplate = ({frightItem}) =>
{
    const {title, } = frightItem;
            return (
            <div class="piece">
              <h5>{title}</h5>
              {frightItem.array.map((arrItem) => (
                <ArrayTemplate arrItem={arrItem}/>
              ))
        }
            </div>
            );
    }



export const Footer = () => {
    const {footerHeaderData, footerLeftData, footerRightData, footerFooterData} = footerData;
    return (
    <section class="footer">
        <FooterHeaderTemplate fheaderItem = {footerHeaderData}/>
        <div class="section footer_container">
        <FooterLeftTemplate fleftItem = {footerLeftData}/>
            <div class="footer_cont_right">
            {footerRightData.map((frightItem) => (
                    <FooterRightTemplate frightItem={frightItem}/>
                ))}
            </div>
        </div>
        <FooterFooterTemplate text = {footerFooterData}/>
        </section>
    // </div>

    )

}
export default Footer;