
function Card({ image, title, price, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {image && (
                <div className="flex justify-center mb-4 h-48">
                    <img
                        src={image}
                        alt={title}
                        className="h-full object-contain"
                    />
                </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            {price && <p className="text-lg font-bold text-emerald-600 mb-2">${price}</p>}
            <p className="text-slate-600">{description}</p>
        </div>
    );
}
export default Card;