import ReactReconciler from 'react-reconciler';

let reconciler = ReactReconciler({
  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    let el = document.createElement(type);
    if (props.className) el.className = props.className;
    if (props.src) el.src = props.src;
    return el;
  },
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return document.createTextNode(text);
  }
});

let ReactDomMini = {
  render(whatToRender, div) {
    let container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container);
  }
};

export default ReactDomMini;
