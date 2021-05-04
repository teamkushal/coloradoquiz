import { TestBed } from '@angular/core/testing';

import { Experimental856Service } from './experimental856.service';

describe('Experimental856Service', () => {
  let service: Experimental856Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental856Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
