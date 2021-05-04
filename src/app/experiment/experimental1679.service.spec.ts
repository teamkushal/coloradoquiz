import { TestBed } from '@angular/core/testing';

import { Experimental1679Service } from './experimental1679.service';

describe('Experimental1679Service', () => {
  let service: Experimental1679Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1679Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
