import { useEffect, useMemo, useState } from "react";
import {
  createDefaultDesignerState,
  normalizeDesignerState,
  serializeDesignerState,
} from "../utils/state";
import { createStatus } from "../utils/projects";

const STORAGE_KEY = "cookieDesignerStateV2";
const LAST_PROJECT_KEY = "cookieDesignerLastProjectV2";

export function useCookieDesigner() {
  const [designerState, setDesignerState] = useState(() => {
    const rawState = localStorage.getItem(STORAGE_KEY);

    if (!rawState) {
      return createDefaultDesignerState();
    }

    try {
      return normalizeDesignerState(JSON.parse(rawState));
    } catch {
      return createDefaultDesignerState();
    }
  });
  const [projectName, setProjectName] = useState(
    () => localStorage.getItem(LAST_PROJECT_KEY) ?? "",
  );
  const [projectStatus, setProjectStatusState] = useState(createStatus(""));

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeDesignerState(designerState)));
  }, [designerState]);

  useEffect(() => {
    if (projectName.trim()) {
      localStorage.setItem(LAST_PROJECT_KEY, projectName.trim());
    } else {
      localStorage.removeItem(LAST_PROJECT_KEY);
    }
  }, [projectName]);

  const setProjectStatus = (message, isError = false) => {
    setProjectStatusState(createStatus(message, isError));
  };

  const updateTextLayer = (layerId, patch) => {
    setDesignerState((current) => ({
      ...current,
      layers: current.layers.map((layer) =>
        layer.id === layerId ? { ...layer, ...patch } : layer,
      ),
    }));
  };

  const updateColor = (color) => {
    setDesignerState((current) => ({
      ...current,
      englishColor: color,
      layers: current.layers.map((layer) =>
        layer.language === "english" ? { ...layer, color } : layer,
      ),
    }));
  };

  const setQuantity = (value) => {
    setDesignerState((current) => ({
      ...current,
      quantity: Math.max(1, Number.parseInt(value, 10) || 1),
    }));
  };

  const restoreLastState = () => {
    const rawState = localStorage.getItem(STORAGE_KEY);
    if (!rawState) {
      setProjectStatus("No saved working state found.", true);
      return;
    }

    try {
      setDesignerState(normalizeDesignerState(JSON.parse(rawState)));
      setProjectStatus("Restored the last working state.");
    } catch {
      setProjectStatus("Saved working state is invalid.", true);
    }
  };

  const resetDesigner = () => {
    setDesignerState(createDefaultDesignerState());
    setProjectStatus("Designer reset to defaults.");
  };

  const exportState = () => serializeDesignerState(designerState);
  const importState = (nextState) => {
    setDesignerState(normalizeDesignerState(nextState));
  };

  return {
    form: designerState,
    previewItems: useMemo(
      () =>
        designerState.layers.map((layer) =>
          layer.language === "english"
            ? { ...layer, color: designerState.englishColor }
            : layer,
        ),
      [designerState],
    ),
    quantity: designerState.quantity,
    setQuantity,
    projectName,
    setProjectName,
    projectStatus,
    setProjectStatus,
    updateTextLayer,
    updateColor,
    restoreLastState,
    exportState,
    importState,
    resetDesigner,
  };
}
