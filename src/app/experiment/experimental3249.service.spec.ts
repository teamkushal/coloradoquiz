import { TestBed } from '@angular/core/testing';

import { Experimental3249Service } from './experimental3249.service';

describe('Experimental3249Service', () => {
  let service: Experimental3249Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3249Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
