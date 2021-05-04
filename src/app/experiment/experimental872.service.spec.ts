import { TestBed } from '@angular/core/testing';

import { Experimental872Service } from './experimental872.service';

describe('Experimental872Service', () => {
  let service: Experimental872Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental872Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
