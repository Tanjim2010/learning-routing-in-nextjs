import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data;
}

export const metadata = {
    title: "Posts | Project",
    description: "Check out our latest blog posts"
}

const Posts = async () => {
    const posts = await getPosts();

    return (
        <div className="">
            <div>
                <h2 className="text-3xl font-semibold py-5 text-center">Our Posts Page</h2>
            </div>
            <div className="grid grid-rows-1 lg:grid-cols-4 gap-4 ">
                {posts?.map(post => (
                    <Link className="" href={`/posts/${post?.id}`} key={post?.id}>
                        <div className="p-4 rounded-2xl active:bg-gray-500 active:duration-100 hover:bg-white hover:text-black transition-colors duration-700 space-y-2 border cursor-pointer">
                            <h2 className="text-2xl font-semibold">{post?.title}</h2>
                            <p>{post?.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Posts;