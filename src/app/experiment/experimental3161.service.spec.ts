import { TestBed } from '@angular/core/testing';

import { Experimental3161Service } from './experimental3161.service';

describe('Experimental3161Service', () => {
  let service: Experimental3161Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3161Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
