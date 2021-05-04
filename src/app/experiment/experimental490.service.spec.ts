import { TestBed } from '@angular/core/testing';

import { Experimental490Service } from './experimental490.service';

describe('Experimental490Service', () => {
  let service: Experimental490Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental490Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
