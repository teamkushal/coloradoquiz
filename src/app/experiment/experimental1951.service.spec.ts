import { TestBed } from '@angular/core/testing';

import { Experimental1951Service } from './experimental1951.service';

describe('Experimental1951Service', () => {
  let service: Experimental1951Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1951Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
