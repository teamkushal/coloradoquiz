import { TestBed } from '@angular/core/testing';

import { Experimental1136Service } from './experimental1136.service';

describe('Experimental1136Service', () => {
  let service: Experimental1136Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1136Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
