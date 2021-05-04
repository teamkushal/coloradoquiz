import { TestBed } from '@angular/core/testing';

import { Experimental1911Service } from './experimental1911.service';

describe('Experimental1911Service', () => {
  let service: Experimental1911Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1911Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
