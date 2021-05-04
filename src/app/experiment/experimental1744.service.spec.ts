import { TestBed } from '@angular/core/testing';

import { Experimental1744Service } from './experimental1744.service';

describe('Experimental1744Service', () => {
  let service: Experimental1744Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1744Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
