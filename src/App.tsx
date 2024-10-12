import axios from "axios";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { api } from "./lib/api";

function App() {
    const [file, setFile] = useState<File | null>(null);

    async function handleGetFuelPrices() {
        try {
            const response = await api.get("/fuel/prices");
            console.log(response.data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFile(event.target.files?.[0] || null);
    }

    async function handleUpload() {
        const formData = new FormData();
        formData.append("file", file!);

        try {
            const response = await axios.post(
                "/fuel/upload-csv",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("File uploaded successfully:", response.data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Gerenciador de Preços de combustiveis
                </h1>

                <div className="mb-6">
                    <Button onClick={handleGetFuelPrices} className="w-full">
                        Pegar Preços dos combustiveis
                    </Button>
                </div>

                <div className="mb-6">
                    <Label htmlFor="file-upload" className="block mb-2">
                        Selecione um arquivo
                    </Label>
                    <Input
                        id="file-upload"
                        type="file"
                        accept=".csv"
                        onChange={handleFileChange}
                        className="w-full"
                    />
                </div>

                <Button
                    onClick={handleUpload}
                    disabled={!file}
                    className="w-full"
                >
                    Enviar Arquivo
                </Button>
            </div>
        </main>
    );
}

export default App;
