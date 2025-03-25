

export const getSinglePosts = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data;
}

const SinglePost = async ({ params }) => {
    const p = await params.id;
    const post = await getSinglePosts(p);
    console.log(p)
    return (
        <div>
            <h2 className='text-2xl font-bold text-center'>single post: {post?.id}</h2>
            <h1 className='text-3xl font-bold text-center'>post title: {post?.title}</h1>
        </div>
    );
};

export default SinglePost;