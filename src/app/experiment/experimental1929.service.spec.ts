import { TestBed } from '@angular/core/testing';

import { Experimental1929Service } from './experimental1929.service';

describe('Experimental1929Service', () => {
  let service: Experimental1929Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1929Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
