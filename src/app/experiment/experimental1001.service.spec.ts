import { TestBed } from '@angular/core/testing';

import { Experimental1001Service } from './experimental1001.service';

describe('Experimental1001Service', () => {
  let service: Experimental1001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1001Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
