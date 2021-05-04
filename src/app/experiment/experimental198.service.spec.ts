import { TestBed } from '@angular/core/testing';

import { Experimental198Service } from './experimental198.service';

describe('Experimental198Service', () => {
  let service: Experimental198Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental198Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
