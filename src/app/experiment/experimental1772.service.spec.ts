import { TestBed } from '@angular/core/testing';

import { Experimental1772Service } from './experimental1772.service';

describe('Experimental1772Service', () => {
  let service: Experimental1772Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1772Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
