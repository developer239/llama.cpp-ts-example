# llama.cpp-ts example

This is an example of how to use the `llama.cpp-ts` package to interact with language models loaded through `llama.cpp`.

## Installation

Before installation, download any gguf model that your machine can handle. For example, this one [Meta-Llama-3.1-8B-Instruct-Q3_K_S.gguf](https://huggingface.co/bullerwins/Meta-Llama-3.1-8B-Instruct-GGUF/resolve/main/Meta-Llama-3.1-8B-Instruct-Q3_K_S.gguf) and put it in the `/models` folder.

1. `yarn install`
2. `yarn start`

## Usage

This example demonstrates how to initialize the model, set a system prompt, and ask multiple connected questions to showcase context handling. The script will output both the questions and the model's responses.

The example uses the following key features of the `llama.cpp-ts` package:

- Initializing the model with custom parameters
- Setting a system prompt to define the assistant's behavior
- Streaming responses for each question
- Maintaining context across multiple questions

You can modify the questions or add more to explore different aspects of the model's capabilities and context handling.
