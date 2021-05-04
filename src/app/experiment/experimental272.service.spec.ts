import { TestBed } from '@angular/core/testing';

import { Experimental272Service } from './experimental272.service';

describe('Experimental272Service', () => {
  let service: Experimental272Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental272Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
