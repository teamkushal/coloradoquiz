import { TestBed } from '@angular/core/testing';

import { Experimental2019Service } from './experimental2019.service';

describe('Experimental2019Service', () => {
  let service: Experimental2019Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2019Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
