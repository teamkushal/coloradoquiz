import { TestBed } from '@angular/core/testing';

import { Experimental1308Service } from './experimental1308.service';

describe('Experimental1308Service', () => {
  let service: Experimental1308Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1308Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
