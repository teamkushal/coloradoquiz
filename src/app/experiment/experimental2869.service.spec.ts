import { TestBed } from '@angular/core/testing';

import { Experimental2869Service } from './experimental2869.service';

describe('Experimental2869Service', () => {
  let service: Experimental2869Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2869Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
