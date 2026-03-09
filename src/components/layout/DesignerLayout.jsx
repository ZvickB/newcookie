export function DesignerLayout({ sidebar, toolbar, children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(247,242,234,0.92),_rgba(239,230,220,0.88))] text-foreground">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-4 py-4 md:px-6 lg:flex-row lg:items-start lg:px-8 lg:py-6">
        <aside className="w-full shrink-0 lg:sticky lg:top-6 lg:w-[390px] print:hidden">
          {sidebar}
        </aside>
        <main className="flex min-w-0 flex-1 flex-col gap-4">
          {toolbar}
          {children}
        </main>
      </div>
    </div>
  );
}
