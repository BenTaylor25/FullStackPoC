import { GET_VALUE_ROUTE } from "../Constants/routes";

export async function getValue(): Promise<string | null> {
    let value = null as string | null;

    await fetch(GET_VALUE_ROUTE)
        .then(res => {
            console.log(res)
            if (res.ok) {
                return res.body;
            }

            throw Error("Server said no.");
        })
        .then(body => {
            console.log(body)
            value = `${body}`;
        })
        .catch(() => {
            console.log("?")
        });

    return value;
}
