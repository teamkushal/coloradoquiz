import { TestBed } from '@angular/core/testing';

import { Experimental1575Service } from './experimental1575.service';

describe('Experimental1575Service', () => {
  let service: Experimental1575Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1575Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
