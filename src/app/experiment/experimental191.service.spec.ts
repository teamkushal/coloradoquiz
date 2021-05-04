import { TestBed } from '@angular/core/testing';

import { Experimental191Service } from './experimental191.service';

describe('Experimental191Service', () => {
  let service: Experimental191Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental191Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
