import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useProjectStorage({
  currentProjectName,
  onProjectNameChange,
  onProjectStatusChange,
  onLoadState,
  getCurrentState,
}) {
  const [projectNames, setProjectNames] = useState([]);

  const fetchProjectNames = useCallback(async () => {
    const { data, error } = await supabase
      .from("cookie_designs")
      .select("name")
      .order("name");

    if (!error) {
      setProjectNames(data.map((row) => row.name));
    }
  }, []);

  useEffect(() => {
    fetchProjectNames();
  }, [fetchProjectNames]);

  const saveProject = async (name, isOverwriting = false) => {
    const projectName = name.trim();

    if (isOverwriting) {
      const { error } = await supabase
        .from("cookie_designs")
        .update({ design_data: getCurrentState() })
        .eq("name", projectName);

      if (error) {
        onProjectStatusChange(`Failed to update "${projectName}".`, true);
        return;
      }
    } else {
      const { error } = await supabase
        .from("cookie_designs")
        .insert({ name: projectName, design_data: getCurrentState() });

      if (error) {
        onProjectStatusChange(`Failed to save "${projectName}".`, true);
        return;
      }
    }

    await fetchProjectNames();
    onProjectNameChange(projectName);
    onProjectStatusChange(
      isOverwriting ? `Updated "${projectName}".` : `Saved "${projectName}".`,
      false,
    );
  };

  const loadProject = async (name) => {
    const projectName = name.trim();
    if (!projectName) {
      onProjectStatusChange("Choose a project to load.", true);
      return;
    }

    const { data, error } = await supabase
      .from("cookie_designs")
      .select("design_data")
      .eq("name", projectName)
      .single();

    if (error || !data) {
      onProjectStatusChange("Saved project data is invalid.", true);
      return;
    }

    onLoadState(data.design_data);
    onProjectNameChange(projectName);
    onProjectStatusChange(`Loaded "${projectName}".`, false);
  };

  const deleteProject = async (name) => {
    const projectName = name.trim();

    const { error } = await supabase
      .from("cookie_designs")
      .delete()
      .eq("name", projectName);

    if (error) {
      onProjectStatusChange(`Failed to delete "${projectName}".`, true);
      return;
    }

    await fetchProjectNames();
    onProjectNameChange(currentProjectName === projectName ? "" : currentProjectName);
    onProjectStatusChange(`Deleted "${projectName}".`, false);
  };

  return { projectNames, saveProject, loadProject, deleteProject };
}
