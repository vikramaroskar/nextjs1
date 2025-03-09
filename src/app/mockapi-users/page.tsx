
import { resolve } from "path";
import { revalidatePath } from "next/cache";

type MockUser = {
    id: number,
    name: string,
};

export default async function MockUsers() {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch("https://67cd2608dd7651e464ed7a1b.mockapi.io/api/users");
    const users = await res.json();

    async function addUserServerFunction(formData:FormData) {
        "use server"

        const name = formData.get("name");

        //make a post request
        const response = await fetch("https://67cd2608dd7651e464ed7a1b.mockapi.io/api/users", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name}),
              

            }
        );
        const newUser = await response.json();
        revalidatePath("/mockapi-users");
        console.log(newUser);


        
    }

    return (

        <div className="py-10">
            <form action={addUserServerFunction} className="mb-4">

                <input type="text" name="name" required className="border p-2 mr-2" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add user</button>
            </form>

            <div className="grid grid-cols-3 gap-4 py-10">
                <ul className="space-y-4 p-4">
                    {users.map((user: MockUser) => (
                        <li key={user.id}
                            className="p-4 bg-white shadow-md rounded-lg text-grey-700">
                            {user.name} ({user.id})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}