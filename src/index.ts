import { Llama, TokenStream } from 'llama.cpp-ts'

// sync
// const llama = new Llama()
// const initialized = llama.initialize(__dirname + '/../models/Meta-Llama-3.1-8B-Instruct-Q3_K_S.gguf')
//
// if (initialized) {
//     const response: string = llama.runQuery("Tell me a story.", 100)
//     console.log(response)
// } else {
//     console.error("Failed to initialize the model.")
// }

// stream
async function main() {
    const llama = new Llama()
    const initialized: boolean = llama.initialize(__dirname + '/../models/Meta-Llama-3.1-8B-Instruct-Q3_K_S.gguf')

    if (initialized) {
        const tokenStream: TokenStream = llama.runQueryStream("Explain quantum computing", 200)

        while (true) {
            const token: string | null = await tokenStream.read()
            if (token === null) break
            process.stdout.write(token)
        }
    } else {
        console.error("Failed to initialize the model.")
    }
}

main().catch(console.error)
