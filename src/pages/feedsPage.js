import posts from "../assets/datasets/posts.json"
import authors from "../assets/datasets/authors.json"
import Post from "../components/post"

const FeedsPage = () => {
    return (<>
    <div className="w-full min-h-screen h-fit flex justify-center bg-[#eeeeee]">
        
        <div className="container p-4 flex flex-col">
            <div>
                Your current timezone is: {Intl.DateTimeFormat().resolvedOptions().timeZone}
            </div>
            {posts && posts.map((post, index) => {
                let author = authors.find(e => e.id === post.author_id)
                return <Post
                post={post}
                author={author}
                index={index}
                key={index}/>
            })}
        </div>
    </div>
    </>);
}

export default FeedsPage