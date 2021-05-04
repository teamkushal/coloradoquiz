import { TestBed } from '@angular/core/testing';

import { Experimental550Service } from './experimental550.service';

describe('Experimental550Service', () => {
  let service: Experimental550Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental550Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
