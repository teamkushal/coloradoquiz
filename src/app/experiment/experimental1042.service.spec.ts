import { TestBed } from '@angular/core/testing';

import { Experimental1042Service } from './experimental1042.service';

describe('Experimental1042Service', () => {
  let service: Experimental1042Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1042Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
