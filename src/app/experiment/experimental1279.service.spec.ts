import { TestBed } from '@angular/core/testing';

import { Experimental1279Service } from './experimental1279.service';

describe('Experimental1279Service', () => {
  let service: Experimental1279Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1279Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
