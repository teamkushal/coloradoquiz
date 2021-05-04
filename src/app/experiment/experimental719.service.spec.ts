import { TestBed } from '@angular/core/testing';

import { Experimental719Service } from './experimental719.service';

describe('Experimental719Service', () => {
  let service: Experimental719Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental719Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
