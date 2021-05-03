import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1107Component } from './test-component1107.component';

describe('TestComponent1107Component', () => {
  let component: TestComponent1107Component;
  let fixture: ComponentFixture<TestComponent1107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
