import {COMPONENTS} from "./components";
import {DIRECTIVES} from './directives';
import {PIPES} from './pipes';
import {PROVIDERS} from './services';

export * from './components';
export * from './directives';
export * from './services';
export * from './pipes';

export default {
  directives: [
      COMPONENTS, DIRECTIVES
  ],
  pipes: [PIPES],
  providers: [PROVIDERS]
}
