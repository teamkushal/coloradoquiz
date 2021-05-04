import { TestBed } from '@angular/core/testing';

import { Experimental2426Service } from './experimental2426.service';

describe('Experimental2426Service', () => {
  let service: Experimental2426Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2426Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
