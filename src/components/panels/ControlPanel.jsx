import { useState } from "react";
import { Palette, Settings2 } from "lucide-react";
import { ProjectPanel } from "../projects/ProjectPanel";
import { TextInputPanel } from "./TextInputPanel";
import { AdjustmentsPanel } from "./AdjustmentsPanel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function ControlPanel(props) {
  const [adjustTab, setAdjustTab] = useState("hebName1");

  return (
    <Card className="border-white/60 bg-card/90 shadow-soft backdrop-blur">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl font-semibold tracking-tight">
          Cookie Designer
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Match the current layout first. Then refine size, position, and color.
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="info" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="info">
              <Palette className="mr-2 h-4 w-4" />
              Info
            </TabsTrigger>
            <TabsTrigger value="adjust">
              <Settings2 className="mr-2 h-4 w-4" />
              Adjust
            </TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="space-y-4">
            <TextInputPanel {...props} />
            <ProjectPanel {...props} />
          </TabsContent>
          <TabsContent value="adjust">
            <AdjustmentsPanel
              items={props.form.layers}
              activeTab={adjustTab}
              onTabChange={setAdjustTab}
              onLayerChange={props.onTextLayerChange}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
