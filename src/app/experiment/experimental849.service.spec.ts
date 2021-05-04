import { TestBed } from '@angular/core/testing';

import { Experimental849Service } from './experimental849.service';

describe('Experimental849Service', () => {
  let service: Experimental849Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental849Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
