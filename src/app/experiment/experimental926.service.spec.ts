import { TestBed } from '@angular/core/testing';

import { Experimental926Service } from './experimental926.service';

describe('Experimental926Service', () => {
  let service: Experimental926Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental926Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
