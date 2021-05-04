import { TestBed } from '@angular/core/testing';

import { Experimental51Service } from './experimental51.service';

describe('Experimental51Service', () => {
  let service: Experimental51Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental51Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
