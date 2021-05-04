import { TestBed } from '@angular/core/testing';

import { Experimental1270Service } from './experimental1270.service';

describe('Experimental1270Service', () => {
  let service: Experimental1270Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1270Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
