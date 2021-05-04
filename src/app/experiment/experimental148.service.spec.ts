import { TestBed } from '@angular/core/testing';

import { Experimental148Service } from './experimental148.service';

describe('Experimental148Service', () => {
  let service: Experimental148Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental148Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
