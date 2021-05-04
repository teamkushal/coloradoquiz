import { TestBed } from '@angular/core/testing';

import { Experimental1072Service } from './experimental1072.service';

describe('Experimental1072Service', () => {
  let service: Experimental1072Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1072Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
