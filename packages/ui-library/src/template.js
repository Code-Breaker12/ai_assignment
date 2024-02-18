// packages/ui-library/src/template.js
export function createTemplate(renderFunction) {
    return renderFunction;
}

// packages/ui-library/src/reactivity.js
import { init } from 'snabbdom/build/package/init';
import { classModule } from 'snabbdom/build/package/modules/class';
import { propsModule } from 'snabbdom/build/package/modules/props';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners';

const patch = init([classModule, propsModule, eventListenersModule]);

let state = {};

export function updateState(newState, renderFunction) {
    state = { ...state, ...newState };
    const newVNode = renderFunction(state);
    patch(oldVNode, newVNode);
    oldVNode = newVNode;
}

let oldVNode = null;

// packages/ui-library/src/lifecycle.js
export function useEffect(effectFunction) {
    // Execute effectFunction when component is mounted
    effectFunction();
}
