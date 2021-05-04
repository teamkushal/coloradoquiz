import { TestBed } from '@angular/core/testing';

import { Experimental1389Service } from './experimental1389.service';

describe('Experimental1389Service', () => {
  let service: Experimental1389Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1389Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
