import { TestBed } from '@angular/core/testing';

import { Experimental1128Service } from './experimental1128.service';

describe('Experimental1128Service', () => {
  let service: Experimental1128Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1128Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
