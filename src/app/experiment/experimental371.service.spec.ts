import { TestBed } from '@angular/core/testing';

import { Experimental371Service } from './experimental371.service';

describe('Experimental371Service', () => {
  let service: Experimental371Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental371Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
