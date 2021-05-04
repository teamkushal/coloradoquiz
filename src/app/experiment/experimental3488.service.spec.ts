import { TestBed } from '@angular/core/testing';

import { Experimental3488Service } from './experimental3488.service';

describe('Experimental3488Service', () => {
  let service: Experimental3488Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3488Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
