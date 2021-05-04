import { TestBed } from '@angular/core/testing';

import { Experimental474Service } from './experimental474.service';

describe('Experimental474Service', () => {
  let service: Experimental474Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental474Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
