import { TestBed } from '@angular/core/testing';

import { Experimental1113Service } from './experimental1113.service';

describe('Experimental1113Service', () => {
  let service: Experimental1113Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1113Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
