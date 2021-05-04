import { TestBed } from '@angular/core/testing';

import { Experimental907Service } from './experimental907.service';

describe('Experimental907Service', () => {
  let service: Experimental907Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental907Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
