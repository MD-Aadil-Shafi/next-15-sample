export const getSampleBlogs = async()=>{
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    );
    const data = await response.json()
    return data;
}

export const getAlbum = async(id:string)=>{
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
    );
    const album = await response.json()
    return album;
}

export const getSingleBlog = async(id:string)=>{
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json()
    return data;
}