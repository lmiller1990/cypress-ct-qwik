import { getContainerEl, setupHooks } from "@cypress/mount-utils";
import { render, type RenderOptions } from "@builder.io/qwik";

interface MountingOptions {
  log?: boolean;
}

export function mount(
  Component: Parameters<typeof render>[0],
  options: RenderOptions & MountingOptions = {}
) {
  // rendering/mounting function.
  const root = getContainerEl();

  // Render component with your library's relevant
  // @ts-ignore - how to tell tsconfig about this?
  render(getContainerEl(), <Component />, options);

  return cy.wait(0, { log: false }).then(() => {
    if (options.log !== false) {
      Cypress.log({
        name: "mount",
        message: "Mounted component",
      });
    }
  });
}

setupHooks();
