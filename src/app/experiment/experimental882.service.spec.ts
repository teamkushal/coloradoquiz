import { TestBed } from '@angular/core/testing';

import { Experimental882Service } from './experimental882.service';

describe('Experimental882Service', () => {
  let service: Experimental882Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental882Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
