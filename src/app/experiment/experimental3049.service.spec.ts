import { TestBed } from '@angular/core/testing';

import { Experimental3049Service } from './experimental3049.service';

describe('Experimental3049Service', () => {
  let service: Experimental3049Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3049Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
