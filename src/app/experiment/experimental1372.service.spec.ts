import { TestBed } from '@angular/core/testing';

import { Experimental1372Service } from './experimental1372.service';

describe('Experimental1372Service', () => {
  let service: Experimental1372Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1372Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
