import { TestBed } from '@angular/core/testing';

import { Experimental1586Service } from './experimental1586.service';

describe('Experimental1586Service', () => {
  let service: Experimental1586Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1586Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
