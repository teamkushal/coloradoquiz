import { TestBed } from '@angular/core/testing';

import { Experimental483Service } from './experimental483.service';

describe('Experimental483Service', () => {
  let service: Experimental483Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental483Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
