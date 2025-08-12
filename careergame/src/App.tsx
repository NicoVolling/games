import { useState } from "react";
import { Play, Settings } from "lucide-react";
import { Button } from "./components/ui/button";

 type Screen = "menu" | "difficulty";

export default function App() {
  const [screen, setScreen] = useState<Screen>("menu");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      {screen === "menu" && (
        <div className="text-center space-y-6 animate-in fade-in zoom-in-95">
          <h1 className="text-4xl font-bold">Careergame</h1>
          <div className="flex flex-col items-center space-y-4">
            <Button className="w-48" onClick={() => setScreen("difficulty")}>
              <Play className="mr-2 h-4 w-4" /> Spiel starten
            </Button>
            <Button variant="secondary" className="w-48">
              <Settings className="mr-2 h-4 w-4" /> Einstellungen
            </Button>
          </div>
        </div>
      )}
      {screen === "difficulty" && (
        <div className="text-center space-y-6 animate-in fade-in zoom-in-95">
          <h2 className="text-3xl font-semibold">Wähle die Schwierigkeit</h2>
          <div className="flex flex-col items-center space-y-4">
            <Button className="w-48">Leicht</Button>
            <Button className="w-48">Normal</Button>
            <Button className="w-48">Schwer</Button>
          </div>
        </div>
      )}
    </div>
  );
}
