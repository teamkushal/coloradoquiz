import { TestBed } from '@angular/core/testing';

import { Experimental1046Service } from './experimental1046.service';

describe('Experimental1046Service', () => {
  let service: Experimental1046Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1046Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
