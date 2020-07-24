import { Option } from '@ephox/katamari';

import { AlloyComponent } from '../../api/component/ComponentApi';
import { Stateless } from '../../behaviour/common/BehaviourState';
import { ComposingConfig } from '../../behaviour/composing/ComposingTypes';

const getCurrent = (component: AlloyComponent, composeConfig: ComposingConfig, _composeState: Stateless): Option<AlloyComponent> => composeConfig.find(component);

export {
  getCurrent
};
