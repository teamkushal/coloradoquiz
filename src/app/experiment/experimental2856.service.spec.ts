import { TestBed } from '@angular/core/testing';

import { Experimental2856Service } from './experimental2856.service';

describe('Experimental2856Service', () => {
  let service: Experimental2856Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2856Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
