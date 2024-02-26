import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
  test('with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });
  test('with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      second: 'second',
    });
    expect(params).toBe('?test=value&second=second');
  });
  test('with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      second: undefined,
    });
    expect(params).toBe('?test=value');
  });
});
