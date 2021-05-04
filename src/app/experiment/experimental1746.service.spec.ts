import { TestBed } from '@angular/core/testing';

import { Experimental1746Service } from './experimental1746.service';

describe('Experimental1746Service', () => {
  let service: Experimental1746Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1746Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
