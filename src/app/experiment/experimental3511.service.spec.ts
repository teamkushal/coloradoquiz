import { TestBed } from '@angular/core/testing';

import { Experimental3511Service } from './experimental3511.service';

describe('Experimental3511Service', () => {
  let service: Experimental3511Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3511Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
