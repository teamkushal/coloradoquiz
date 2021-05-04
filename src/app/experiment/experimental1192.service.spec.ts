import { TestBed } from '@angular/core/testing';

import { Experimental1192Service } from './experimental1192.service';

describe('Experimental1192Service', () => {
  let service: Experimental1192Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1192Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
