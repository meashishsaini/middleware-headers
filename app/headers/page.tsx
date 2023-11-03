import {headers} from "next/headers"


export default function Page () {
    const headersObject = Object.fromEntries(headers().entries())

    return <div>
        <h1>Headers</h1>
        <pre>{JSON.stringify(headersObject, null, 2)}</pre>
    </div>
}