import { patch } from 'snabbdom';
import { classModule, propsModule, eventListenersModule } from 'snabbdom';

const modules = [classModule, propsModule, eventListenersModule];

let state = {};

let oldVNode = null;

export function updateState(newState, renderFunction) {
    state = { ...state, ...newState };
    const newVNode = renderFunction(state);
    patch(oldVNode, newVNode);
    oldVNode = newVNode;
}
