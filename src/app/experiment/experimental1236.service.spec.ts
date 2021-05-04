import { TestBed } from '@angular/core/testing';

import { Experimental1236Service } from './experimental1236.service';

describe('Experimental1236Service', () => {
  let service: Experimental1236Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1236Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
