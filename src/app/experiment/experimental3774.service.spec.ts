import { TestBed } from '@angular/core/testing';

import { Experimental3774Service } from './experimental3774.service';

describe('Experimental3774Service', () => {
  let service: Experimental3774Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3774Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
