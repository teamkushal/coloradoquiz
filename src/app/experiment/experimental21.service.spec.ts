import { TestBed } from '@angular/core/testing';

import { Experimental21Service } from './experimental21.service';

describe('Experimental21Service', () => {
  let service: Experimental21Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental21Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
