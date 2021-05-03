import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent366Component } from './test-component366.component';

describe('TestComponent366Component', () => {
  let component: TestComponent366Component;
  let fixture: ComponentFixture<TestComponent366Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent366Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
