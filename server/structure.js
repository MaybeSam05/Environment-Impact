const descriptionHandler = (description) => {
    // use description to generate a score from 1 - 5
}

const manufacturingHandler = (product) => {
    // use product to generate a score from 1 - 5
}

const supplyChainHandler = (company) => {
    // use company name to generate a score from 1 - 5
}

let displayObj = {
    description : descriptionHandler,
    manufacturing : manufacturingHandler,
    supplyChain : supplyChainHandler
}