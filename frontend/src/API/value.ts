import { GET_VALUE_ROUTE, SET_VALUE_ROUTE } from "../Constants/routes";

export async function getValue(): Promise<string | null> {
    let value = null as string | null;

    await fetch(GET_VALUE_ROUTE)
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            throw Error("Server said no.");
        })
        .then(body => {
            value = body.value;
        })
        .catch(() => {});

    return value;
}

export async function setValue(value: string): Promise<boolean> {
    const route = SET_VALUE_ROUTE + `/${value}`;

    let succeeded = false;

    await fetch(route, {
        method: 'POST'
    })
        .then(res => {
            if (res.ok) {
                succeeded = true;
            }

            throw Error("Server said no.");
        })
        .catch(() => {});

    return succeeded;
}
