import { TestBed } from '@angular/core/testing';

import { Experimental542Service } from './experimental542.service';

describe('Experimental542Service', () => {
  let service: Experimental542Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental542Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
