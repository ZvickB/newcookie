import { useMemo, useState } from "react";
import { Download, Printer, RotateCcw } from "lucide-react";
import { DesignerLayout } from "./components/layout/DesignerLayout";
import { CookiePreviewGrid } from "./components/preview/CookiePreviewGrid";
import { ControlPanel } from "./components/panels/ControlPanel";
import { DeleteProjectDialog } from "./components/projects/DeleteProjectDialog";
import { OverwriteProjectDialog } from "./components/projects/OverwriteProjectDialog";
import { Button } from "./components/ui/button";
import { useCookieDesigner } from "./hooks/useCookieDesigner";
import { useProjectStorage } from "./hooks/useProjectStorage";
import { buildCookieCopies } from "./utils/cookies";

function App() {
  const [deleteTarget, setDeleteTarget] = useState("");
  const [overwriteTarget, setOverwriteTarget] = useState("");
  const {
    form,
    previewItems,
    quantity,
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
  } = useCookieDesigner();

  const {
    projectNames,
    saveProject,
    loadProject,
    deleteProject,
  } = useProjectStorage({
    currentProjectName: projectName,
    onProjectNameChange: setProjectName,
    onProjectStatusChange: setProjectStatus,
    onLoadState: importState,
    getCurrentState: exportState,
  });

  const cookies = useMemo(
    () => buildCookieCopies(previewItems, quantity),
    [previewItems, quantity],
  );

  return (
    <>
      <DesignerLayout
        sidebar={
          <ControlPanel
            form={form}
            quantity={quantity}
            onQuantityChange={setQuantity}
            projectName={projectName}
            onProjectNameChange={setProjectName}
            projectNames={projectNames}
            projectStatus={projectStatus}
            onSaveProject={() => {
              const name = projectName.trim();
              if (!name) {
                setProjectStatus("Enter a project name first.", true);
                return;
              }
              if (projectNames.includes(name)) {
                setOverwriteTarget(name);
                return;
              }
              saveProject(name);
            }}
            onLoadProject={loadProject}
            onDeleteProject={(name) => {
              if (!name) {
                setProjectStatus("Choose a project to delete.", true);
                return;
              }
              setDeleteTarget(name);
            }}
            onTextLayerChange={updateTextLayer}
            onColorChange={updateColor}
          />
        }
        toolbar={
          <div className="flex flex-wrap gap-3 print:hidden">
            <Button variant="secondary" onClick={restoreLastState}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Restore
            </Button>
            <Button variant="secondary" onClick={resetDesigner}>
              <Download className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button onClick={() => window.print()}>
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
          </div>
        }
      >
        <CookiePreviewGrid cookies={cookies} />
      </DesignerLayout>

      <DeleteProjectDialog
        projectName={deleteTarget}
        open={Boolean(deleteTarget)}
        onOpenChange={(open) => {
          if (!open) {
            setDeleteTarget("");
          }
        }}
        onConfirm={() => {
          deleteProject(deleteTarget);
          setDeleteTarget("");
        }}
      />

      <OverwriteProjectDialog
        projectName={overwriteTarget}
        open={Boolean(overwriteTarget)}
        onOpenChange={(open) => {
          if (!open) {
            setOverwriteTarget("");
          }
        }}
        onConfirm={() => {
          saveProject(overwriteTarget, true);
          setOverwriteTarget("");
        }}
      />
    </>
  );
}

export default App;
