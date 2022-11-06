import React from 'react'

function PostCard({cat:{name,breed,sex,age,city,image}}){
        return(
            <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg">
                <img
                className="w-fill object-cover h-96"
                src={image}
                alt=""
                id="perro-img"
                />
                <div className="px-6 py-4">
                <div  className="font-bold text-xl mb-2">{name}</div>
                <h3 className="text-gray-700 text-base">{breed}</h3>
                <h3 className="text-gray-700 text-base">{sex}</h3>
                <h3 className="text-gray-700 text-base">{age}</h3>
                <h3 className="text-gray-700 text-base">{city}</h3>
                <h3 className="text-gray-700 text-base">cat</h3>
                </div>
            </div>
        )
}

export default PostCard