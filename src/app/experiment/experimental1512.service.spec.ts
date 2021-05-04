import { TestBed } from '@angular/core/testing';

import { Experimental1512Service } from './experimental1512.service';

describe('Experimental1512Service', () => {
  let service: Experimental1512Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1512Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
