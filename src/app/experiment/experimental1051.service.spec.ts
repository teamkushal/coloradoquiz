import { TestBed } from '@angular/core/testing';

import { Experimental1051Service } from './experimental1051.service';

describe('Experimental1051Service', () => {
  let service: Experimental1051Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1051Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
