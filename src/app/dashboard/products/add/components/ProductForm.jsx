"use client"
const ProductForm = () => {
    const handleSubmit =async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = {productName}
        const res = await fetch('https://learning-routing-in-nextjs-eight.vercel.app/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const result = await res.json();
        console.log(result)
    }
    return (
        <div className="flex justify-center items-center my-5">
            <form onSubmit={handleSubmit}>
                <input className="bg-white text-black rounded-l-lg p-2 outline-none border-none" type="text" name="productName" placeholder='Product Name' />
                <button type='submit' className="bg-green-300 p-2 rounded-r-lg cursor-pointer active:bg-green-400 ">Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;