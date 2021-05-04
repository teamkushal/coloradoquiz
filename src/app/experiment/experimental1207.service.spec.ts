import { TestBed } from '@angular/core/testing';

import { Experimental1207Service } from './experimental1207.service';

describe('Experimental1207Service', () => {
  let service: Experimental1207Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1207Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
