import { TestBed } from '@angular/core/testing';

import { Experimental1182Service } from './experimental1182.service';

describe('Experimental1182Service', () => {
  let service: Experimental1182Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1182Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
