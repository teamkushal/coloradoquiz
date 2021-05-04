import { TestBed } from '@angular/core/testing';

import { Experimental2863Service } from './experimental2863.service';

describe('Experimental2863Service', () => {
  let service: Experimental2863Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2863Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
