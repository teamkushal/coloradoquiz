import { TestBed } from '@angular/core/testing';

import { Experimental3724Service } from './experimental3724.service';

describe('Experimental3724Service', () => {
  let service: Experimental3724Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3724Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
