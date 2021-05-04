import { TestBed } from '@angular/core/testing';

import { Experimental2198Service } from './experimental2198.service';

describe('Experimental2198Service', () => {
  let service: Experimental2198Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2198Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
