import { TestBed } from '@angular/core/testing';

import { Experimental1036Service } from './experimental1036.service';

describe('Experimental1036Service', () => {
  let service: Experimental1036Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1036Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
