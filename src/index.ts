import { Llama, TokenStream } from 'llama.cpp-ts'

async function main() {
    const llama = new Llama()
    const modelPath = __dirname + '/../models/Meta-Llama-3.1-8B-Instruct-Q3_K_S.gguf'
    const modelParams = { nGpuLayers: 32 }
    const contextParams = { nContext: 2048 }

    const initialized: boolean = llama.initialize(modelPath, modelParams, contextParams)

    if (!initialized) {
        console.error("Failed to initialize the model.")
        return
    }

    llama.setSystemPrompt("You are a helpful assistant with expertise in history and geography. Always provide clear, concise, and accurate answers.")

    const questions = [
        "Who was the first President of the United States?",
        "What was his role in the American Revolution?",
        "Can you name the capital city of the country he led and describe its significance during his presidency?"
    ]

    for (const question of questions) {
        console.log("\nQuestion:", question)
        console.log("Answer: ")

        const tokenStream: TokenStream = llama.prompt(question)

        let response = ""
        while (true) {
            const token: string | null = await tokenStream.read()
            if (token === null) break
            process.stdout.write(token)
            response += token
        }
        console.log("\n")
    }

    // Optionally, you can reset the conversation here if needed
    // llama.resetConversation()
}

main().catch(console.error)
