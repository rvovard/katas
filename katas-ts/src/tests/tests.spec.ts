import { Data, editData, editDataArray, editDataRecord } from "./tests";

const dataArray: Data[] = [
  { prop1: 'A', prop2: false, prop3: 0 },
  { prop1: 'B', prop2: true, prop3: 41 },
  { prop1: 'C', prop2: false, prop3: -1 },
];
const dataRecord: Record<string, Data> = {
  'A': { prop1: 'A', prop2: false, prop3: 0 },
  'B': { prop1: 'B', prop2: true, prop3: 41 },
  'C': { prop1: 'C', prop2: false, prop3: -1 },
};

const expectedArray: Data[] = [
  { prop1: 'AZ', prop2: true, prop3: 1 },
  { prop1: 'BZ', prop2: false, prop3: 42 },
  { prop1: 'CZ', prop2: true, prop3: 0 },
];
const expectedRecord: Record<string, Data> = {
  'A': { prop1: 'AZ', prop2: true, prop3: 1 },
  'B': { prop1: 'BZ', prop2: false, prop3: 42 },
  'C': { prop1: 'CZ', prop2: true, prop3: 0 },
};


describe('Tests', () => {
  test('Tests', () => {
    editDataArray(dataArray, editData)
    editDataRecord(dataRecord, editData)

    expect(dataArray).toEqual(expectedArray);
    expect(dataRecord).toEqual(expectedRecord);
  })
})
