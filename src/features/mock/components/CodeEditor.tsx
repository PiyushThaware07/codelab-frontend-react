import React, { useState } from "react";
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';


const CodeEditor: React.FC = () => {
    const [code, setCode] = useState<string>("console.log('hello')");
    const handleEditorChange = (value: string | undefined) => {
        setCode(value || "");
        console.log('Content changed:', value);
    };

    const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
        console.log('Editor mounted:', editor);
    };


    const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
        selectOnLineNumbers: true,
        automaticLayout: true,
        theme: "vs-light",
        language: 'javascript',
        fontSize: 14,
        smoothScrolling: true,
        minimap: {
            enabled: false
        },
        wordWrap: "on", // Enable word wrap
        lineNumbers: "on", // Show line numbers
        formatOnType: true, // Format the code when typing
        scrollBeyondLastLine: false, // Prevent scrolling beyond the last line
        cursorStyle: "line", // Set cursor style
        readOnly: false, // Set to true for read-only editor
    }


    async function handleExecute() {
        try {
            const response = await fetch("https://emkc.org/api/v2/piston/execute", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "language": "javascript",
                    "version": "18.15.0",
                    "files": [
                        {
                            "content": code
                        }
                    ],
                })
            })
            const data = await response.json();
            console.log('API Response:', data);
            return data.run;
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="code-editor h-[calc(100vh-140px)] overflow-hidden">
            <button onClick={handleExecute}>run code</button>
            <Editor
                defaultLanguage="typescript"
                defaultValue="console.log('hello')"
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={editorOptions}
            />
        </div>
    )
}

export default CodeEditor;