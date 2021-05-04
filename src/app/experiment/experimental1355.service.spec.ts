import { TestBed } from '@angular/core/testing';

import { Experimental1355Service } from './experimental1355.service';

describe('Experimental1355Service', () => {
  let service: Experimental1355Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1355Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
