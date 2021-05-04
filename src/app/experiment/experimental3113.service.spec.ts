import { TestBed } from '@angular/core/testing';

import { Experimental3113Service } from './experimental3113.service';

describe('Experimental3113Service', () => {
  let service: Experimental3113Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3113Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
