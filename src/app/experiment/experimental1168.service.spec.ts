import { TestBed } from '@angular/core/testing';

import { Experimental1168Service } from './experimental1168.service';

describe('Experimental1168Service', () => {
  let service: Experimental1168Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1168Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
