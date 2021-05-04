import { TestBed } from '@angular/core/testing';

import { Experimental3800Service } from './experimental3800.service';

describe('Experimental3800Service', () => {
  let service: Experimental3800Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3800Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
