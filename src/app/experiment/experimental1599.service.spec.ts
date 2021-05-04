import { TestBed } from '@angular/core/testing';

import { Experimental1599Service } from './experimental1599.service';

describe('Experimental1599Service', () => {
  let service: Experimental1599Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1599Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
