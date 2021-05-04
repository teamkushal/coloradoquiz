import { TestBed } from '@angular/core/testing';

import { Experimental1521Service } from './experimental1521.service';

describe('Experimental1521Service', () => {
  let service: Experimental1521Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1521Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
