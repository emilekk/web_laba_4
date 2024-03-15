export const createBlogTitleTemplate = (blogTitleData) => {
    return `    
    <div class="blog__title">
        <h1 class="blog__title__text">
            ${blogTitleData}
        </h1>
    </div>`;
};

export const createBlogArrayTemplate = ({isBig, isNewColumn, src, alt, date, description, link:{href, title}}) => 
{
        return `
        ${isBig ? "<div class= \"blog__array__big_column\">" :
         isNewColumn ? "<div class=\"blog__array__column_top\"> <div class=\"blog__array_row\">" : "<div class=\"blog__array_row\">"}
            <img src=${src} alt=${alt} />
            ${isBig ? "<div class=\"big_column__text\">" : "<div class=\"blog__array__column\"> <div class=\"blog_column__text\">" }
                <div>
                    <p class="blog__array__content_big_p">${date}</p>
                    <h3 class="blog__array__text">${description}</h3>
                </div>
                <div>
                    <a class="blog__array__content_big_a" href=${href}>${title}</a>
                </div>
            </div>
        ${isBig ? "</div>" : isNewColumn ? "</div> </div>" : "</div> </div> </div>"}

    `;
};

export const blogTemplate = ({blogTitleData, blogArrayData}) =>{
    const blogTitleTemplate = createBlogTitleTemplate(blogTitleData);
    const blogArrayTemplate = blogArrayData.map((Item) => createBlogArrayTemplate(Item)).join("");
    const resultTemplate =
    `
    <section class="section blog">
        ${blogTitleTemplate}
        <div class="blog__array">
            ${blogArrayTemplate}
        </div>
    </section>
    `;
    return resultTemplate;
}