import { TestBed } from '@angular/core/testing';

import { Experimental760Service } from './experimental760.service';

describe('Experimental760Service', () => {
  let service: Experimental760Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental760Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
