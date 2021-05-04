import { TestBed } from '@angular/core/testing';

import { Experimental2588Service } from './experimental2588.service';

describe('Experimental2588Service', () => {
  let service: Experimental2588Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2588Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
