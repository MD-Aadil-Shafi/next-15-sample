export const getSampleUsers = async()=>{
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    const sampleUsers = await response.json()
    return sampleUsers;
}

export const getAlbum = async(id:string)=>{
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
    );
    const album = await response.json()
    return album;
}