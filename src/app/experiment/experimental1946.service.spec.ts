import { TestBed } from '@angular/core/testing';

import { Experimental1946Service } from './experimental1946.service';

describe('Experimental1946Service', () => {
  let service: Experimental1946Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1946Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
