import { TestBed } from '@angular/core/testing';

import { Experimental2324Service } from './experimental2324.service';

describe('Experimental2324Service', () => {
  let service: Experimental2324Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2324Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
