import  { blogData } from "../mockData/blogData";

export const BlogTitleTemplate = ({blogTitleItem}) => <h1 class="blog_header">{blogTitleItem}</h1>;

export const LeftBlogArrayTemplate = ({leftBlogArrayItem}) => 
{   
    const {src, alt, date, description, href, title} = leftBlogArrayItem;
    return ( 
        <>
        <img src={src} alt = {alt}/>
        <div class ="container_text__left">
            <div class="upper_text__left">
                <p class="date">{date}</p>
                <h3 class="blog_title">{description}</h3>
            </div>
            <a href={href} class="cta">{title}</a>
        </div>
        </>
        )
    }

    export const RightBlogArrayTemplate = ({rightBlogArrayItem}) => {
    const {src, alt, date, description, href, title} = rightBlogArrayItem;
    return ( 
    <div class="container__right">
        <img src={src} alt={alt}/>
        <div class ="container_text__right">
            <div class="upper_text__right">
                <p class="date">{date}</p>
                <h3 class="blog_title">{description}</h3>
            </div>
            <a href={href} class="cta">{title}</a>
        </div>
    </div>
        );
    } 

export const Blog = () => 
{
    const {blogTitleData, leftBlogArrayData, rightBlogArrayData} = blogData;
    return (
    <div class="blog__section">
        <BlogTitleTemplate blogTitleItem={blogTitleData}/>
        <div class="blog_array">
            <div class="blog_array__left">
                <div class="container__left">
                {leftBlogArrayData.map((leftBlogArrayItem) => (
                        <LeftBlogArrayTemplate leftBlogArrayItem={leftBlogArrayItem}/>
                    ))}
                </div>
            </div>
            <div class="blog_array__right">
            {rightBlogArrayData.map((rightBlogArrayItem) => (
                        <RightBlogArrayTemplate rightBlogArrayItem={rightBlogArrayItem}/>
                    ))}
            </div>
        </div>
    </div>
    );
};

export default Blog;

