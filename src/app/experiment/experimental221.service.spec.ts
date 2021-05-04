import { TestBed } from '@angular/core/testing';

import { Experimental221Service } from './experimental221.service';

describe('Experimental221Service', () => {
  let service: Experimental221Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental221Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
