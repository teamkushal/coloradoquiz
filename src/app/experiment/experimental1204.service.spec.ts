import { TestBed } from '@angular/core/testing';

import { Experimental1204Service } from './experimental1204.service';

describe('Experimental1204Service', () => {
  let service: Experimental1204Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1204Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
