import { TestBed } from '@angular/core/testing';

import { Experimental2022Service } from './experimental2022.service';

describe('Experimental2022Service', () => {
  let service: Experimental2022Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2022Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
