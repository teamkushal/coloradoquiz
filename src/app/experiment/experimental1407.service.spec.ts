import { TestBed } from '@angular/core/testing';

import { Experimental1407Service } from './experimental1407.service';

describe('Experimental1407Service', () => {
  let service: Experimental1407Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1407Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
