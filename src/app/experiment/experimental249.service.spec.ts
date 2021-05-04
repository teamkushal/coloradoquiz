import { TestBed } from '@angular/core/testing';

import { Experimental249Service } from './experimental249.service';

describe('Experimental249Service', () => {
  let service: Experimental249Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental249Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
