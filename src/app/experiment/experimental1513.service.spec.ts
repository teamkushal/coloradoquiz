import { TestBed } from '@angular/core/testing';

import { Experimental1513Service } from './experimental1513.service';

describe('Experimental1513Service', () => {
  let service: Experimental1513Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1513Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
