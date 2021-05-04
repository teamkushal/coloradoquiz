import { TestBed } from '@angular/core/testing';

import { Experimental1107Service } from './experimental1107.service';

describe('Experimental1107Service', () => {
  let service: Experimental1107Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1107Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
