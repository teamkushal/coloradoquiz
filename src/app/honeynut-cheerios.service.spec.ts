import { TestBed } from '@angular/core/testing';

import { HoneynutCheeriosService } from './honeynut-cheerios.service';

describe('HoneynutCheeriosService', () => {
  let service: HoneynutCheeriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoneynutCheeriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
