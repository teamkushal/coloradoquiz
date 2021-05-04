import { TestBed } from '@angular/core/testing';

import { Experimental3450Service } from './experimental3450.service';

describe('Experimental3450Service', () => {
  let service: Experimental3450Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3450Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
