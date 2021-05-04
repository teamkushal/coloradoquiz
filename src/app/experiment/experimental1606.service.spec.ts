import { TestBed } from '@angular/core/testing';

import { Experimental1606Service } from './experimental1606.service';

describe('Experimental1606Service', () => {
  let service: Experimental1606Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1606Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
