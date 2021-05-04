import { TestBed } from '@angular/core/testing';

import { Experimental616Service } from './experimental616.service';

describe('Experimental616Service', () => {
  let service: Experimental616Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental616Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
