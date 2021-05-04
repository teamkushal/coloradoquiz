import { TestBed } from '@angular/core/testing';

import { Experimental2751Service } from './experimental2751.service';

describe('Experimental2751Service', () => {
  let service: Experimental2751Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2751Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
