import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
describe('StorageService', () => {
  let service: StorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(StorageService);
  });

  const storage = {
    key: 'test',
    value: 'test value',
  };

  it('should be created storage service', () => {
    expect(service).toBeTruthy();
  });

  it('getCache test not cache', () => {
    service.destroy(storage.key);
    service.destroy('date-' + storage.key);
    service.destroy('expire-' + storage.key);
    service.set(storage.key, storage.value);
    const res = service.getCache(storage.key);
    expect(res).toEqual(false);
  });

  it('getCache test', () => {
    service.destroy(storage.key);
    service.set(storage.key, storage.value);
    service.setCache(storage.key, storage.value);
    const res = service.getCache(storage.key);
    expect(res).toEqual(storage.value);
  });

  afterEach(() => {
    service.destroy(storage.key);
  });
});
