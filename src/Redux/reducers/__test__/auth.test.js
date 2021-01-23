import { fetchUser } from '../../actions/index';
import authReducer from '../auth';

const state = {};
const response = {
  messages: 'Signed up successfully',
  is_success: true,
  data: {
    user: {
      id: 1,
      email: 'test@mail.com',
      authentication_token: 'WaQy5CqD3Rv_W8Rg8RVg',
      username: 'test',
    },
  },
};

const res = authReducer(state, fetchUser(response));
describe('actions', () => {
  test('should be of type object', () => {
    expect(typeof res).toBe('object');
  });

  test('response should have Signed up successfully message', () => {
    expect(res.messages).toBe('Signed up successfully');
  });

  test('response should have user_id no.1', () => {
    expect(res.data.user.id).toEqual(1);
  });

  test('response should have a status of true on is_success', () => {
    expect(res.is_success).toBe(true);
  });

  test('response should not have a status of false on is_success', () => {
    expect(res.is_success).not.toBe(false);
  });

  test('response should have test as the username', () => {
    expect(res.data.user.username).toBe('test');
  });
  test('response should have test@mail.com as an email', () => {
    expect(res.data.user.email).toBe('test@mail.com');
  });

  test('response should have an authentication_token', () => {
    expect(res.data.user.authentication_token).toBe('WaQy5CqD3Rv_W8Rg8RVg');
  });

  test('authentication_token on the response should not be empty', () => {
    expect(res.data.user.authentication_token).not.toBe('');
  });
});
