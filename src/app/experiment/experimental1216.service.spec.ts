import { TestBed } from '@angular/core/testing';

import { Experimental1216Service } from './experimental1216.service';

describe('Experimental1216Service', () => {
  let service: Experimental1216Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1216Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
