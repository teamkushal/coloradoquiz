import { TestBed } from '@angular/core/testing';

import { Experimental1195Service } from './experimental1195.service';

describe('Experimental1195Service', () => {
  let service: Experimental1195Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1195Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
