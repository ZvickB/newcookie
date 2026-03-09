import { Slider } from "../ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { layerLabels } from "../../utils/layers";

const sliderConfig = [
  { key: "size", label: "Size", min: 18, max: 110, step: 1 },
  { key: "y", label: "Vertical", min: -120, max: 120, step: 1 },
  { key: "x", label: "Horizontal", min: -120, max: 120, step: 1 },
];

export function AdjustmentsPanel({ items, activeTab, onTabChange, onLayerChange }) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="space-y-4">
      <TabsList className="grid h-auto w-full grid-cols-2 gap-2">
        {items.map((item) => (
          <TabsTrigger key={item.id} value={item.id} className="px-3 py-2 text-xs">
            {layerLabels[item.id]}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.id} value={item.id} className="space-y-5">
          {sliderConfig.map((slider) => (
            <div key={slider.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>{slider.label}</Label>
                <span className="text-xs font-medium text-muted-foreground">
                  {item[slider.key]}
                </span>
              </div>
              <Slider
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={[item[slider.key]]}
                onValueChange={([value]) =>
                  onLayerChange(item.id, { [slider.key]: value })
                }
              />
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}
