import { TestBed } from '@angular/core/testing';

import { Experimental2272Service } from './experimental2272.service';

describe('Experimental2272Service', () => {
  let service: Experimental2272Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2272Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
