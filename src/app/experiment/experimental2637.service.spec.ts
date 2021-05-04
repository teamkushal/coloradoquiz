import { TestBed } from '@angular/core/testing';

import { Experimental2637Service } from './experimental2637.service';

describe('Experimental2637Service', () => {
  let service: Experimental2637Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2637Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
