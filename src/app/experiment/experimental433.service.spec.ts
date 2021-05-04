import { TestBed } from '@angular/core/testing';

import { Experimental433Service } from './experimental433.service';

describe('Experimental433Service', () => {
  let service: Experimental433Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental433Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
