
export const sampleProduct = [
    {id: 1, name: "One", price: 1500},
    {id: 2, name: "Two", price: 2000}
]

// on postman or browser hit
// http://localhost:3000/sample-api
export async function GET(){
    return Response.json(sampleProduct);
}

export async function POST(request:Request){
const product = await request.json();
const newProduct = {
    id: sampleProduct.length + 1,
    name: product.name,
    price: product.price
}
sampleProduct.push(newProduct);

return new Response(JSON.stringify(newProduct), {
    headers: {
        "Content-Type": "application/json",
    },
    status: 201
})
}