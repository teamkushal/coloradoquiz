import { TestBed } from '@angular/core/testing';

import { Experimental3407Service } from './experimental3407.service';

describe('Experimental3407Service', () => {
  let service: Experimental3407Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3407Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
