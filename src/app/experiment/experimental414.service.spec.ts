import { TestBed } from '@angular/core/testing';

import { Experimental414Service } from './experimental414.service';

describe('Experimental414Service', () => {
  let service: Experimental414Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental414Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
