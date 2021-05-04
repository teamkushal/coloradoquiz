import { TestBed } from '@angular/core/testing';

import { Experimental1634Service } from './experimental1634.service';

describe('Experimental1634Service', () => {
  let service: Experimental1634Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1634Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
