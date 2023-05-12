<template>
    <div>
        <div ref="editor" style="height: 400px;"></div>
        <button @click="runCode">Run Code</button>
        <!-- <div ref="output" style="white-space: pre;"></div> -->
        <div ref="output" style="height: 200px; border: 1px solid black;" contenteditable></div>
    </div>
</template>

<script>
    import * as monaco from "monaco-editor";

    export default {
        data(){
            return {
                input: "",
            };
        },
        mounted() {
            // Create the Monaco editor instance
            this.editor = monaco.editor.create(this.$refs.editor, {
            value: "",
            language: "javascript",
            });
        },
        methods: {
            async runCode() {
                // Get the code from the editor
                const code = this.editor.getValue();

                 // Get the input from the output element
                const input = this.$refs.output.innerText;

                // Send the code to glot.io to be executed
                const response = await fetch("http://localhost:8000/api/code-glot", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token a2b2bcc8-ea11-450c-ac7e-3158bfd190b7",
                    },
                    body: JSON.stringify({
                    "files": [{ "name": "main.js", "content": code }],
                    "stdin": input,
                    }),
                });

                 // Get the output from glot.io
                const result = await response.json();
                const output = result.stdout || result.stderr;

                // Display the output in the output element
                this.$refs.output.innerText += "\n" + output;

                // Clear the input in the output element
                this.$refs.output.innerText = "";

                // Set the input in the output element to the output from Glot.io
                this.$refs.output.innerText += output;

                // // Get the output from glot.io and display it in the terminal
                // const result = await response.json();
                // const output = result.stdout || result.stderr;
                // this.$refs.output.innerText = output;
            },
        }
    }
</script>

<style scoped>

</style>