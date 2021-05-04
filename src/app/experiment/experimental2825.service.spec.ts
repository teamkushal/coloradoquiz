import { TestBed } from '@angular/core/testing';

import { Experimental2825Service } from './experimental2825.service';

describe('Experimental2825Service', () => {
  let service: Experimental2825Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2825Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
