import { TestBed } from '@angular/core/testing';

import { Experimental30Service } from './experimental30.service';

describe('Experimental30Service', () => {
  let service: Experimental30Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental30Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
