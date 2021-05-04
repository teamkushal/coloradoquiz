import { TestBed } from '@angular/core/testing';

import { Experimental993Service } from './experimental993.service';

describe('Experimental993Service', () => {
  let service: Experimental993Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental993Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
