import { TestBed } from '@angular/core/testing';

import { Experimental514Service } from './experimental514.service';

describe('Experimental514Service', () => {
  let service: Experimental514Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental514Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
