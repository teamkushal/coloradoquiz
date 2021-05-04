import { TestBed } from '@angular/core/testing';

import { Experimental7Service } from './experimental7.service';

describe('Experimental7Service', () => {
  let service: Experimental7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
