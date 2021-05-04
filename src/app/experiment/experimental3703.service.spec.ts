import { TestBed } from '@angular/core/testing';

import { Experimental3703Service } from './experimental3703.service';

describe('Experimental3703Service', () => {
  let service: Experimental3703Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3703Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
