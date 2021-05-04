import { TestBed } from '@angular/core/testing';

import { Experimental3058Service } from './experimental3058.service';

describe('Experimental3058Service', () => {
  let service: Experimental3058Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3058Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
