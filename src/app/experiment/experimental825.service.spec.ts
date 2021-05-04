import { TestBed } from '@angular/core/testing';

import { Experimental825Service } from './experimental825.service';

describe('Experimental825Service', () => {
  let service: Experimental825Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental825Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
