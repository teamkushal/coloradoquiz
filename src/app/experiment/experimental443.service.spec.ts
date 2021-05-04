import { TestBed } from '@angular/core/testing';

import { Experimental443Service } from './experimental443.service';

describe('Experimental443Service', () => {
  let service: Experimental443Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental443Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
