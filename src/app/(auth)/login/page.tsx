
export default async function Login({params}:{params:{id:string}}) {

    const {id }=   await params
    return <h1> Login {id}  Route</h1>
}