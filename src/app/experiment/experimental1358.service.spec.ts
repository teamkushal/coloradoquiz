import { TestBed } from '@angular/core/testing';

import { Experimental1358Service } from './experimental1358.service';

describe('Experimental1358Service', () => {
  let service: Experimental1358Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1358Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
