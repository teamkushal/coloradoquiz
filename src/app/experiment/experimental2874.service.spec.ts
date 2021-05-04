import { TestBed } from '@angular/core/testing';

import { Experimental2874Service } from './experimental2874.service';

describe('Experimental2874Service', () => {
  let service: Experimental2874Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2874Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
