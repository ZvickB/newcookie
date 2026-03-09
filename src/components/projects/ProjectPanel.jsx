import { FolderOpen, Save, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select } from "../ui/select";

export function ProjectPanel({
  projectName,
  onProjectNameChange,
  projectNames,
  projectStatus,
  onSaveProject,
  onLoadProject,
  onDeleteProject,
}) {
  return (
    <section className="space-y-3 rounded-2xl border border-border/70 bg-secondary/45 p-4">
      <div className="grid gap-1.5">
        <Label htmlFor="projectName">Project name</Label>
        <Input
          id="projectName"
          value={projectName}
          placeholder="e.g. bar-mitzvah-1"
          onChange={(event) => onProjectNameChange(event.target.value)}
        />
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="projectList">Saved projects</Label>
        <Select
          id="projectList"
          value={projectName}
          onChange={(event) => onProjectNameChange(event.target.value)}
        >
          <option value="">
            {projectNames.length ? "Select project" : "No saved projects"}
          </option>
          {projectNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Button type="button" onClick={onSaveProject}>
          <Save className="mr-2 h-4 w-4" />
          Save
        </Button>
        <Button type="button" variant="secondary" onClick={() => onLoadProject(projectName)}>
          <FolderOpen className="mr-2 h-4 w-4" />
          Load
        </Button>
        <Button type="button" variant="destructive" onClick={() => onDeleteProject(projectName)}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </div>

      <p className={`min-h-5 text-sm ${projectStatus.isError ? "text-destructive" : "text-emerald-700"}`}>
        {projectStatus.message}
      </p>
    </section>
  );
}
