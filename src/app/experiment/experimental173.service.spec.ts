import { TestBed } from '@angular/core/testing';

import { Experimental173Service } from './experimental173.service';

describe('Experimental173Service', () => {
  let service: Experimental173Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental173Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
