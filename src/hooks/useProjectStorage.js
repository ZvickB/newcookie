const PROJECTS_STORAGE_KEY = "cookieDesignerProjectsV2";

function readProjectsStore() {
  const rawStore = localStorage.getItem(PROJECTS_STORAGE_KEY);
  if (!rawStore) {
    return {};
  }

  try {
    const parsed = JSON.parse(rawStore);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeProjectsStore(store) {
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(store));
}

export function useProjectStorage({
  currentProjectName,
  onProjectNameChange,
  onProjectStatusChange,
  onLoadState,
  getCurrentState,
}) {
  const saveProject = (name, isOverwriting = false) => {
    const projectName = name.trim();
    const store = readProjectsStore();
    store[projectName] = getCurrentState();
    writeProjectsStore(store);
    onProjectNameChange(projectName);
    onProjectStatusChange(
      isOverwriting ? `Updated "${projectName}".` : `Saved "${projectName}".`,
      false,
    );
  };

  const loadProject = (name) => {
    const projectName = name.trim();
    if (!projectName) {
      onProjectStatusChange("Choose a project to load.", true);
      return;
    }

    const store = readProjectsStore();
    const saved = store[projectName];

    if (!saved) {
      onProjectStatusChange("Saved project data is invalid.", true);
      return;
    }

    onLoadState(saved);
    onProjectNameChange(projectName);
    onProjectStatusChange(`Loaded "${projectName}".`, false);
  };

  const deleteProject = (name) => {
    const projectName = name.trim();
    const store = readProjectsStore();

    if (!store[projectName]) {
      onProjectStatusChange("Project no longer exists.", true);
      return;
    }

    delete store[projectName];
    writeProjectsStore(store);
    onProjectNameChange(currentProjectName === projectName ? "" : currentProjectName);
    onProjectStatusChange(`Deleted "${projectName}".`, false);
  };

  return {
    projectNames: Object.keys(readProjectsStore()).sort(),
    saveProject,
    loadProject,
    deleteProject,
  };
}
