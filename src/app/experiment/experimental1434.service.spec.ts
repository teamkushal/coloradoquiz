import { TestBed } from '@angular/core/testing';

import { Experimental1434Service } from './experimental1434.service';

describe('Experimental1434Service', () => {
  let service: Experimental1434Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1434Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
