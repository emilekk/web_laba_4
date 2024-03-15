export const createFooterHeaderTemplate = ({title, btnText}) => {
    const template = `
    <h1 class="section footer_title">${title}</h1>
    <button class="btn footer_btn">${btnText}</button>
    `;
    return template;
}
//
export const createFooterLeftTemplate = ({src, text}) => {
    const template = `
        <div class="footer_cont_left">
        <img src=${src} class="gptlogo"></img>
        <p class="adress">${text}</p>
        </div>`;
    return template;
}
//

export const createFooterRightTemplate = ({type, href, arrtitle}) =>
{
    switch (type){
        case "first":
            return `
            <div class="piece">
              <h5>${arrtitle}</h5>
            `;    
        case "middle":
            return `
            <a href=${href}>${arrtitle}</a> 
            `;
        case "last":
            return `
            <a href=${href}>${arrtitle}</a> 
            </div>
            `;
        default:
            return ``;
    }
};

export const createFooterFooterTemplate = (text) => {
    return `
        <div class="footer_footer">${text}</div>
    `
}

export const footerTemplate = ({footerHeaderData, footerLeftData, footerRightData, footerFooterData}) => {
    const footerHeaderTemplate = createFooterHeaderTemplate(footerHeaderData);
    const footerLeftTemplate = createFooterLeftTemplate(footerLeftData);
    const footerRightTemplate = footerRightData.map((subItem) => createFooterRightTemplate(subItem)).join(""); 
    const footerFooterTemplate = createFooterFooterTemplate(footerFooterData);
    const resultTemplate = `
        <section class="footer">
            ${footerHeaderTemplate}
            <div class="section footer_container">
            ${footerLeftTemplate}
                <div class="footer_cont_right">
                    ${footerRightTemplate}
                </div>
            </div>
            ${footerFooterTemplate}
        </section>
    </div>
    `;
    return resultTemplate;
}
