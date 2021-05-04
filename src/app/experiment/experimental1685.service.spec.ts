import { TestBed } from '@angular/core/testing';

import { Experimental1685Service } from './experimental1685.service';

describe('Experimental1685Service', () => {
  let service: Experimental1685Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1685Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
