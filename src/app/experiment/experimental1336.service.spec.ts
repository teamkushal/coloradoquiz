import { TestBed } from '@angular/core/testing';

import { Experimental1336Service } from './experimental1336.service';

describe('Experimental1336Service', () => {
  let service: Experimental1336Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1336Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
