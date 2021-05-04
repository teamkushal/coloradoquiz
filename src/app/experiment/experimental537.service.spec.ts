import { TestBed } from '@angular/core/testing';

import { Experimental537Service } from './experimental537.service';

describe('Experimental537Service', () => {
  let service: Experimental537Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental537Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
