import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { isValidHexColor, normalizeHexColor } from "../../utils/color";
import { layerLabels } from "../../utils/layers";

export function TextInputPanel({
  form,
  quantity,
  onQuantityChange,
  onTextLayerChange,
  onColorChange,
}) {
  const [colorDraft, setColorDraft] = useState(form.englishColor);
  const [colorError, setColorError] = useState("");

  useEffect(() => {
    setColorDraft(form.englishColor);
    setColorError("");
  }, [form.englishColor]);

  const applyColorDraft = () => {
    const trimmed = colorDraft.trim();
    const prefixed = trimmed.startsWith("#") ? trimmed : `#${trimmed}`;

    if (!trimmed) {
      const fallback = normalizeHexColor("");
      onColorChange(fallback);
      setColorDraft(fallback);
      setColorError("");
      return true;
    }

    if (!isValidHexColor(prefixed)) {
      setColorError("Enter a 6-digit hex color like #ff9900.");
      return false;
    }

    onColorChange(prefixed);
    setColorDraft(prefixed);
    setColorError("");
    return true;
  };

  return (
    <section className="space-y-4">
      <div className="grid gap-3">
        {form.layers.map((layer) => (
          <div key={layer.id} className="grid gap-1.5">
            <Label htmlFor={layer.id}>{layerLabels[layer.id]}</Label>
            <Input
              id={layer.id}
              value={layer.name}
              placeholder={layer.placeholder}
              onChange={(event) =>
                onTextLayerChange(layer.id, { name: event.target.value })
              }
            />
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-end">
        <div className="grid gap-1.5">
          <Label htmlFor="color">English color</Label>
          <Input
            id="color"
            type="color"
            value={form.englishColor}
            className="h-11 w-full rounded-xl p-1 sm:w-16"
            onChange={(event) => onColorChange(event.target.value)}
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="colorText">Or enter hex</Label>
          <div className="flex gap-2">
            <Input
              id="colorText"
              value={colorDraft}
              placeholder="#000000"
              onChange={(event) => {
                setColorDraft(event.target.value);
                if (colorError) {
                  setColorError("");
                }
              }}
              onBlur={applyColorDraft}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  applyColorDraft();
                }
              }}
            />
            <Button
              type="button"
              variant="secondary"
              onClick={applyColorDraft}
            >
              Apply
            </Button>
          </div>
          <p className="min-h-5 text-xs text-destructive">{colorError}</p>
        </div>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="quantity">Enter amount</Label>
        <Input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => onQuantityChange(event.target.value)}
        />
      </div>
    </section>
  );
}
