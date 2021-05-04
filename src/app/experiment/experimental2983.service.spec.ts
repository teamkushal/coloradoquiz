import { TestBed } from '@angular/core/testing';

import { Experimental2983Service } from './experimental2983.service';

describe('Experimental2983Service', () => {
  let service: Experimental2983Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2983Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
