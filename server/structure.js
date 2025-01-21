const descriptionHandler = async (description) => {
    // use description to generate a score from 1 - 5
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a sustainability expert. Rate the following product description on a scale of 1-5 based on its environmental impact, where 1 is very harmful and 5 is very sustainable."
            },
            {
                role: "user", 
                content: description
            }
        ],
        temperature: 0.7,
        max_tokens: 100
    });

    const score = parseInt(response.choices[0].message.content);
    return score;
}

const manufacturingHandler = async (product) => {
    // use product to generate a score from 1 - 5
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a sustainability expert. Rate the following product's manufacturing process on a scale of 1-5 based on its environmental impact, where 1 is very harmful and 5 is very sustainable."
            },
            {
                role: "user", 
                content: product
            }
        ],
        temperature: 0.7,
        max_tokens: 100
    });

    const score = parseInt(response.choices[0].message.content);
    return score;
}

const supplyChainHandler = async (company) => {
    // use company name to generate a score from 1 - 5
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a sustainability expert. Rate the following company's supply chain process on a scale of 1-5 based on its environmental impact, where 1 is very harmful and 5 is very sustainable."
            },
            {
                role: "user", 
                content: company
            }
        ],
        temperature: 0.7,
        max_tokens: 100
    });

    const score = parseInt(response.choices[0].message.content);
    return score;
}

let displayObj = {
    description : descriptionHandler,
    manufacturing : manufacturingHandler,
    supplyChain : supplyChainHandler
}

const { description } = displayObj;
const { manufacturing } = displayObj;
const { supplyChain } = displayObj;

// link back to front end in future release