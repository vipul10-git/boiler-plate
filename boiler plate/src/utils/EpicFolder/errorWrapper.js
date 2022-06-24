import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_URL } from '../actions/actionConstants';

const errorWrapper = (error, props) => {
  if (error.status && (error.status === 403 || error.status === 401)) {
    localStorage.clear();
    window.open(`${BASE_URL}/api/login?continue=${window.location.href}`, '_self');
  }
  if (Array.isArray(props)) {
    return from(props).pipe(map(i => i));
  }
  return of(props);
};

export default errorWrapper;

