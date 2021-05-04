import { TestBed } from '@angular/core/testing';

import { Experimental586Service } from './experimental586.service';

describe('Experimental586Service', () => {
  let service: Experimental586Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental586Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
