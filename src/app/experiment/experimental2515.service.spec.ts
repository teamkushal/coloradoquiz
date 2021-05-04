import { TestBed } from '@angular/core/testing';

import { Experimental2515Service } from './experimental2515.service';

describe('Experimental2515Service', () => {
  let service: Experimental2515Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2515Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
