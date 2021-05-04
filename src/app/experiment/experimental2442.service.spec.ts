import { TestBed } from '@angular/core/testing';

import { Experimental2442Service } from './experimental2442.service';

describe('Experimental2442Service', () => {
  let service: Experimental2442Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2442Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
