
export default async function Register({params}:{params:{id:string}}) {

    const {id }=   await params
    return <h1> Register {id}  Route</h1>
}