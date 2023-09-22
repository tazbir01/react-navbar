import Price from "../Price/Price";

const PriceOption = () => {
    const priceOption = [
        {
            "id": 1,
            "product_name": "Smartphone",
            "price": 599.99,
            "features": [
                "5.5-inch OLED display",
                "12MP dual-camera system",
                "128GB storage",
                "Face recognition",
                "Fingerprint sensor",
                "Water and dust resistance (IP68)"
            ]
        },
        {
            "id": 2,
            "product_name": "Laptop",
            "price": 999.99,
            "features": [
                "15.6-inch Full HD display",
                "Intel Core i7 processor",
                "16GB RAM",
                "512GB SSD",
                "NVIDIA GeForce GTX 1650 graphics",
                "Backlit keyboard",
                "Windows 10 Pro"
            ]
        },
        {
            "id": 3,
            "product_name": "Smart TV",
            "price": 799.99,
            "features": [
                "55-inch 4K UHD screen",
                "Dolby Atmos sound",
                "Smart TV with built-in streaming apps",
                "Voice control",
                "Bluetooth connectivity",
                "Multiple HDMI and USB ports"
            ]
        }
    ]
    

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-extrabold text-center">Best Shop In The City</h1>
            <div className="md:grid md:grid-cols-3 mt-8">
            {
                priceOption.map(item => <Price key={item.id} item={item}></Price>)
            }
            </div>
        </div>
    );
};

export default PriceOption;