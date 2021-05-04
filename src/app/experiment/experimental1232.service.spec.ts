import { TestBed } from '@angular/core/testing';

import { Experimental1232Service } from './experimental1232.service';

describe('Experimental1232Service', () => {
  let service: Experimental1232Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1232Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
