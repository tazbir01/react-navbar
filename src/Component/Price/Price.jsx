import Features from "../Features/Features";

const Price = ({item}) => {
    const {price, product_name, features } = item
    return (
        <div className="bg-red-300 rounded-lg mx-2 my-5 p-5 flex flex-col">
            <p className="text-3xl font-bold text-center pt-6">${price}</p>
            <h2 className="text-xl font-semibold text-center py-3">{product_name}</h2>
            <div className="flex-grow">
            {
                features.map((features, idx) => <Features key={idx} features={features}></Features>)
            }
            </div>
            <div>
                <button className="bg-red-600 hover:bg-green-600 text-white rounded-lg w-full py-1 font-semibold">Buy Now</button>
            </div>
        </div>
    );
};

export default Price;