import { sampleProduct } from "../route";

// http://localhost:3000/sample-api/1
export async function GET(request:Request, {params}:{params: {id:string}}) {
    const {id} = await params;
    const product = sampleProduct.find((p) => p.id = parseInt(id));
    return Response.json(product)
}