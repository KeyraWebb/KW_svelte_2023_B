import { writeable } from "svelte/store";

const packageSelector = writeable("");
const fname = writeable("");

export{
    packageSelector,
    fname
}