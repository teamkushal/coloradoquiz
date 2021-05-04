import { TestBed } from '@angular/core/testing';

import { Experimental1766Service } from './experimental1766.service';

describe('Experimental1766Service', () => {
  let service: Experimental1766Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1766Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
