import { TestBed } from '@angular/core/testing';

import { Experimental2683Service } from './experimental2683.service';

describe('Experimental2683Service', () => {
  let service: Experimental2683Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2683Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
