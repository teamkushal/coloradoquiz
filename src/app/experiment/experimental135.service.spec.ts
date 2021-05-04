import { TestBed } from '@angular/core/testing';

import { Experimental135Service } from './experimental135.service';

describe('Experimental135Service', () => {
  let service: Experimental135Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental135Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
