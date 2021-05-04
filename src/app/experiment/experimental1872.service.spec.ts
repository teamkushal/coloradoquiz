import { TestBed } from '@angular/core/testing';

import { Experimental1872Service } from './experimental1872.service';

describe('Experimental1872Service', () => {
  let service: Experimental1872Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1872Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
