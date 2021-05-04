import { TestBed } from '@angular/core/testing';

import { Experimental1938Service } from './experimental1938.service';

describe('Experimental1938Service', () => {
  let service: Experimental1938Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1938Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
