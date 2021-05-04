import { TestBed } from '@angular/core/testing';

import { Experimental1172Service } from './experimental1172.service';

describe('Experimental1172Service', () => {
  let service: Experimental1172Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1172Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
