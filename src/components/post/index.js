const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Post = (props) => {
    const background = props.index % 2 === 0 ? "bg-[#ccecff]" : "bg-[#ffffff]"
    const author = props.author;
    const post = props.post;
    const d = new Date(post.created_at);
    return <>
        <div className={`w-full ${background} rounded-sm shadow my-2`}>
            <div className="flex items-center border-b border-slate-300">
                <img src={author.avatar_url} className="w-11 rounded-full p-2" alt=""/>
                <span className="pr-2 font-semibold text-orange-500">{author.name}</span>
                <span className="text-gray-500">posted on {weekdays[d.getDay()]}, {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}, {d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()}:{d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()}</span>
            </div>

            <div className="flex m-2">
                <div className="min-w-[250px] m-1 w-1/3">
                    <img src={post.image_url} alt=""/>
                </div>
                <div className="my-1 mx-2 w-3/4">
                    <h1 className="font-bold text-xl">
                        {post.title}
                    </h1>
                    <p>
                        {post.body}
                    </p>
                    
                </div>
            </div>

        </div>


    </>
}

export default Post;