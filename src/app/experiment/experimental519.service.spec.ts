import { TestBed } from '@angular/core/testing';

import { Experimental519Service } from './experimental519.service';

describe('Experimental519Service', () => {
  let service: Experimental519Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental519Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
