import React, { useState } from "react";
import { Input } from "./components/ui/Input";
import { Button } from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";

export default function App() {
  const [query, setQuery] = useState("");
  const [showPromptMessage, setShowPromptMessage] = useState(false);

  const handleAsk = () => {
    setShowPromptMessage(true);
    // Aquí puedes conectar con Supabase o cualquier IA después
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a2c] to-[#1a1f3c] text-white p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="relative">
          <Input
            placeholder="Haz tu pregunta..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleAsk} className="absolute right-2 top-2">
            Preguntar
          </Button>
        </div>

        {showPromptMessage && (
          <Card>
            <CardContent>
              <p className="text-sm">
                Tu pregunta ha sido enviada. La respuesta está en camino...
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
