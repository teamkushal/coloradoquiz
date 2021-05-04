import { TestBed } from '@angular/core/testing';

import { Experimental1252Service } from './experimental1252.service';

describe('Experimental1252Service', () => {
  let service: Experimental1252Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1252Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
