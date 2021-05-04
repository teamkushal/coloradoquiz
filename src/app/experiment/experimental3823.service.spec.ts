import { TestBed } from '@angular/core/testing';

import { Experimental3823Service } from './experimental3823.service';

describe('Experimental3823Service', () => {
  let service: Experimental3823Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3823Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
