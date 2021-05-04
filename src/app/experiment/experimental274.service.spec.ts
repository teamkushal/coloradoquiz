import { TestBed } from '@angular/core/testing';

import { Experimental274Service } from './experimental274.service';

describe('Experimental274Service', () => {
  let service: Experimental274Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental274Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
