import { TestBed } from '@angular/core/testing';

import { Experimental311Service } from './experimental311.service';

describe('Experimental311Service', () => {
  let service: Experimental311Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental311Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
