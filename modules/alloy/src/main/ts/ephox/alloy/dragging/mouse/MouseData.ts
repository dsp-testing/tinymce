import { MouseEvent } from '@ephox/dom-globals';
import { Option } from '@ephox/katamari';
import { EventArgs, SugarPosition } from '@ephox/sugar';

const getData = (event: EventArgs<MouseEvent>): Option<SugarPosition> => Option.from(SugarPosition(event.x(), event.y()));

// When dragging with the mouse, the delta is simply the difference
// between the two position (previous/old and next/nu)
const getDelta = (old: SugarPosition, nu: SugarPosition): SugarPosition => SugarPosition(nu.left() - old.left(), nu.top() - old.top());

export {
  getData,
  getDelta
};
