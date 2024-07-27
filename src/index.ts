import { Llama } from 'llama.cpp-ts';

const llama = new Llama();
const initialized = llama.initialize('./path/to/your/model.gguf');

if (initialized) {
    const response: string = llama.runQuery("Tell me a joke about programming.", 100);
    console.log(response);
} else {
    console.error("Failed to initialize the model.");
}
