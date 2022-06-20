import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';

const errorWrapper = (error, props) => {
  if (Array.isArray(props)) {
    return from(props).pipe(map(i => i));
  }
  return of(props);
};

export default errorWrapper;
