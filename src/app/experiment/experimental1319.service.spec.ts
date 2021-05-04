import { TestBed } from '@angular/core/testing';

import { Experimental1319Service } from './experimental1319.service';

describe('Experimental1319Service', () => {
  let service: Experimental1319Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1319Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
