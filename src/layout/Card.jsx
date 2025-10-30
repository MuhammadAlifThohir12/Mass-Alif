const Card = ({ icon: Icon, title, desc }) => {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white p-6">
            <div className="flex items-center justify-center rounded-full mb-5">
                {Icon && <Icon size={45} className="text-gray-600" />}
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="text-gray-700 mb-5 text-base break-words">{desc}</div>
            </div>
        </div>
    )
}

export default Card;