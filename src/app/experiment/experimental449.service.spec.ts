import { TestBed } from '@angular/core/testing';

import { Experimental449Service } from './experimental449.service';

describe('Experimental449Service', () => {
  let service: Experimental449Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental449Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
