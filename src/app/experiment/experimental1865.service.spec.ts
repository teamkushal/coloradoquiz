import { TestBed } from '@angular/core/testing';

import { Experimental1865Service } from './experimental1865.service';

describe('Experimental1865Service', () => {
  let service: Experimental1865Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1865Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
