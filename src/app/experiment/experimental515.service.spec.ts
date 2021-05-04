import { TestBed } from '@angular/core/testing';

import { Experimental515Service } from './experimental515.service';

describe('Experimental515Service', () => {
  let service: Experimental515Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental515Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
