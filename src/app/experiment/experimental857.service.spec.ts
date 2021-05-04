import { TestBed } from '@angular/core/testing';

import { Experimental857Service } from './experimental857.service';

describe('Experimental857Service', () => {
  let service: Experimental857Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental857Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
