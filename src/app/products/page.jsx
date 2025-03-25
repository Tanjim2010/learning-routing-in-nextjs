

const ProductPage = async () => {

    const res = await fetch('https://learning-routing-in-nextjs-eight.vercel.app/api/items', { cache: 'force-cache' })
    const data = await res.json();

    return (
        <div>
            {data?.data?.map(singleData => (
                <li key={singleData?._id}>{singleData?.productName}</li>
            ))}
        </div>
    );
};

export default ProductPage;