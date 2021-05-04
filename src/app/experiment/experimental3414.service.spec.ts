import { TestBed } from '@angular/core/testing';

import { Experimental3414Service } from './experimental3414.service';

describe('Experimental3414Service', () => {
  let service: Experimental3414Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3414Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
