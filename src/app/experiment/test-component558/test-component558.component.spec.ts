import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent558Component } from './test-component558.component';

describe('TestComponent558Component', () => {
  let component: TestComponent558Component;
  let fixture: ComponentFixture<TestComponent558Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent558Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
