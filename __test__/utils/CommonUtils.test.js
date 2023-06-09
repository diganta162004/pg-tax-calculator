import {
  isCompleted,
  isFailed,
  isLoading,
  isNotYetStarted,
  isNullOrEmpty,
} from '../../src/utils/CommonUtils';
import { LOADING_STATUS } from '../../src/statics/enums';

describe(
  'CommonUtils: isNullOrEmpty', () => {
    test(
      'positive cases', () => {
        expect(isNullOrEmpty(null)).toEqual(true);
        expect(isNullOrEmpty(undefined)).toEqual(true);
        expect(isNullOrEmpty({})).toEqual(true);
        expect(isNullOrEmpty([])).toEqual(true);
        expect(isNullOrEmpty('')).toEqual(true);
      },
    );
    test(
      'negative cases', () => {
        expect(isNullOrEmpty('value')).toEqual(false);
        expect(isNullOrEmpty(123)).toEqual(false);
        expect(isNullOrEmpty(0)).toEqual(false);
        expect(isNullOrEmpty(true)).toEqual(false);
        expect(isNullOrEmpty(false)).toEqual(false);
        expect(isNullOrEmpty([1])).toEqual(false);
        expect(isNullOrEmpty(new Date())).toEqual(false);
        expect(isNullOrEmpty({
          key: 'value',
        })).toEqual(false);
      },
    );
  },
);

describe(
  'CommonUtils: isLoading', () => {
    test(
      'positive cases with single and multiple params', () => {
        expect(isLoading(LOADING_STATUS.LOADING)).toEqual(true);
        expect(isLoading(
          LOADING_STATUS.LOADING, LOADING_STATUS.LOADING,
        )).toEqual(true);
        expect(isLoading(
          LOADING_STATUS.LOADING, LOADING_STATUS.COMPLETED,
        )).toEqual(true);
        expect(isLoading(
          LOADING_STATUS.LOADING, null,
        )).toEqual(true);
      },
    );
    test(
      'negative cases with single and multiple params', () => {
        expect(isLoading(LOADING_STATUS.NOT_YET_STARTED)).toEqual(false);
        expect(isLoading(LOADING_STATUS.COMPLETED)).toEqual(false);
        expect(isLoading(LOADING_STATUS.FAILED)).toEqual(false);
      },
    );
    test(
      'negative cases with null params', () => {
        expect(isLoading()).toEqual(false);
        expect(isLoading(null)).toEqual(false);
        expect(isLoading(undefined)).toEqual(false);
        expect(isLoading({})).toEqual(false);
        expect(isLoading('LOADING')).toEqual(false);
      },
    );
  },
);

describe(
  'CommonUtils: isNotYetStarted', () => {
    test(
      'positive cases with single and multiple params', () => {
        expect(isNotYetStarted(LOADING_STATUS.NOT_YET_STARTED)).toEqual(true);
        expect(isNotYetStarted(
          LOADING_STATUS.NOT_YET_STARTED, LOADING_STATUS.NOT_YET_STARTED,
        )).toEqual(true);
        expect(isNotYetStarted(
          LOADING_STATUS.NOT_YET_STARTED, LOADING_STATUS.COMPLETED,
        )).toEqual(true);
        expect(isNotYetStarted(
          LOADING_STATUS.NOT_YET_STARTED, null,
        )).toEqual(true);
      },
    );
    test(
      'negative cases with single and multiple params', () => {
        expect(isNotYetStarted(LOADING_STATUS.LOADING)).toEqual(false);
        expect(isNotYetStarted(LOADING_STATUS.COMPLETED)).toEqual(false);
        expect(isNotYetStarted(LOADING_STATUS.FAILED)).toEqual(false);
      },
    );
    test(
      'negative cases with null params', () => {
        expect(isNotYetStarted()).toEqual(false);
        expect(isNotYetStarted(null)).toEqual(false);
        expect(isNotYetStarted(undefined)).toEqual(false);
        expect(isNotYetStarted({})).toEqual(false);
        expect(isNotYetStarted('NOT_YET_STARTED')).toEqual(false);
      },
    );
  },
);

describe(
  'CommonUtils: isCompleted', () => {
    test(
      'positive cases with single and multiple params', () => {
        expect(isCompleted(LOADING_STATUS.COMPLETED)).toEqual(true);
        expect(isCompleted(
          LOADING_STATUS.COMPLETED, LOADING_STATUS.COMPLETED,
        )).toEqual(true);
        expect(isCompleted(
          LOADING_STATUS.COMPLETED, LOADING_STATUS.COMPLETED,
        )).toEqual(true);
        expect(isCompleted(
          LOADING_STATUS.COMPLETED, null,
        )).toEqual(true);
      },
    );
    test(
      'negative cases with single and multiple params', () => {
        expect(isCompleted(LOADING_STATUS.NOT_YET_STARTED)).toEqual(false);
        expect(isCompleted(LOADING_STATUS.LOADING)).toEqual(false);
        expect(isCompleted(LOADING_STATUS.FAILED)).toEqual(false);
      },
    );
    test(
      'negative cases with null params', () => {
        expect(isCompleted()).toEqual(false);
        expect(isCompleted(null)).toEqual(false);
        expect(isCompleted(undefined)).toEqual(false);
        expect(isCompleted({})).toEqual(false);
        expect(isCompleted('COMPLETED')).toEqual(false);
      },
    );
  },
);

describe(
  'CommonUtils: isFailed', () => {
    test(
      'positive cases with single and multiple params', () => {
        expect(isFailed(LOADING_STATUS.FAILED)).toEqual(true);
        expect(isFailed(
          LOADING_STATUS.FAILED, LOADING_STATUS.FAILED,
        )).toEqual(true);
        expect(isFailed(
          LOADING_STATUS.FAILED, LOADING_STATUS.COMPLETED,
        )).toEqual(true);
        expect(isFailed(
          LOADING_STATUS.FAILED, null,
        )).toEqual(true);
      },
    );
    test(
      'negative cases with single and multiple params', () => {
        expect(isFailed(LOADING_STATUS.NOT_YET_STARTED)).toEqual(false);
        expect(isFailed(LOADING_STATUS.LOADING)).toEqual(false);
        expect(isFailed(LOADING_STATUS.COMPLETED)).toEqual(false);
      },
    );
    test(
      'negative cases with null params', () => {
        expect(isFailed()).toEqual(false);
        expect(isFailed(null)).toEqual(false);
        expect(isFailed(undefined)).toEqual(false);
        expect(isFailed({})).toEqual(false);
        expect(isFailed('FAILED')).toEqual(false);
      },
    );
  },
);
