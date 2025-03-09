
export default async function Forgot({params}:{params:{id:string}}) {

    const {id }=   await params
    return <h1> Forgot Password {id}  Route</h1>
}