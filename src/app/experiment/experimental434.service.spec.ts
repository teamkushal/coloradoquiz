import { TestBed } from '@angular/core/testing';

import { Experimental434Service } from './experimental434.service';

describe('Experimental434Service', () => {
  let service: Experimental434Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental434Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
